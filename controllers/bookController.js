const Book = require('../models/book');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
});

// display list of all books
exports.book_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Book list');
});

// display detail page for a specific book
exports.book_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
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
