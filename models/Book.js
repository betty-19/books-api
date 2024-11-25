const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Title is required'],
      maxlength: [100, 'Title must not exceed 100 characters'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      maxlength: [50, 'Author name must not exceed 50 characters'],
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
    },
    publishedYear: {
      type: Number,
      required: [true, 'Published year is required'],
      min: [1000, 'Published year must be a valid year'],
      max: [new Date().getFullYear(), 'Published year cannot be in the future'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true });

  module.exports = mongoose.model('Book', bookSchema)