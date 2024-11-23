const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required'],
      unique: true,
    },
    publishedYear: {
      type: Number,
      required: [true, 'Published year is required'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true });

  module.exports = mongoose.model('Book', bookSchema)