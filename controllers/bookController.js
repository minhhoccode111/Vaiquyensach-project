const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
  // get details of books, book instance, authors and genre counts (in parallel)
  const [numBooks, numBookInstances, numAvailableBookInstances, numAuthors, numGenres] = await Promise.all([
    Book.countDocuments({}).exec(),
    BookInstance.countDocuments({}).exec(),
    BookInstance.countDocuments({ status: 'Available' }).exec(),
    Author.countDocuments({}).exec(),
    Genre.countDocuments({}).exec(),
  ]);

  res.render('index', {
    title: 'Local Library Home',
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: numAvailableBookInstances,
    author_count: numAuthors,
    genre_count: numGenres,
  });
});

// display list of all books
exports.book_list = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, 'title author').sort({ title: 1 }).populate('author').exec();

  res.render('book_list', { title: 'Book List', book_list: allBooks });
});

// display detail page for a specific book
exports.book_detail = asyncHandler(async (req, res, next) => {
  // get details of books, book instances for specific book
  const [book, bookInstances] = await Promise.all([Book.findById(req.params.id).populate('author').populate('genre').exec(), BookInstance.find({ book: req.params.id }).exec()]);
  if (book === null) {
    // no result
    const err = new Error('Book not found');
    err.status = 404;
    return next(err);
  }

  res.render('book_detail', {
    title: book.title,
    book: book,
    book_instances: bookInstances,
  });
});

// display detail page for a specific book
exports.book_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create GET');
});

// handle book create on POST
exports.book_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book create POST');
});

// display book delete form on GET
exports.book_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete GET');
});

// handle book delete on POST
exports.book_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book delete POST');
});

// display book update form on GET
exports.book_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book update GET');
});

// handler book update on POST
exports.book_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENT: Book update POST');
});
