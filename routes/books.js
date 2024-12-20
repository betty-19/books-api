const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  const { title, author, isbn, publishedYear } = req.body;

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ message: 'Title must be a non-empty string' });
  }
  if (typeof author !== 'string' || author.trim() === '') {
    return res.status(400).json({ message: 'Author must be a non-empty string' });
  }
  
  if (!Number.isInteger(publishedYear) || publishedYear <= 0) {
    return res.status(400).json({ message: 'Published Year must be a positive integer' });
  }
  const currentYear = new Date().getFullYear();
  if (publishedYear > currentYear) {
    return res.status(400).json({ message: 'Published Year cannot be in the future' });
  }


  if (!title || !author ||  !isbn || !publishedYear) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(400).json({ message: 'A book with this ISBN already exists' });
    }
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/recommendations', async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(404).json({ message: 'No books available' });
    }
    const randomBook = books[Math.floor(Math.random() * books.length)];
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/favorite/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    book.favorite = true;
    await book.save();
    res.status(200).json({ message: 'Book marked as favorite', book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;