const BookInstance = require('../models/bookinstance');
const asyncHandler = require('express-async-handler');

// display list of all BookInstance
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate('book').exec();

  res.render('bookinstance_list', {
    title: 'Book Instance List',
    bookinstance_list: allBookInstances,
  });
});

// display detail page for a a specific BookInstance
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// display BookInstance create form on GET
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET');
});

// handle BookInstance create on POST
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST');
});

// display BookInstance delete form on GET
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
});

exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
});

// display BookInstance update form on GET
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
});

// handle bookinstance update on POST
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
});
