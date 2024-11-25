require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 5000;
DB_URI=process.env.DB_URI || 'mongodb+srv://admin:admin12345678@devapi.8f6gg.mongodb.net/booksdb';






app.use(express.json());
app.use('/books', bookRoutes);


mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));