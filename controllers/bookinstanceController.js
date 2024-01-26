const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');
const debug = require('debug')('bookinstance');

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
  const bookInstance = await BookInstance.findById(req.params.id).populate('book').exec();

  if (bookInstance === null) {
    // no results
    debug(`id not found in bookinstance detail get: ` + req.params.id);
    const err = new Error('Book copy not found');
    err.status = 404;
    return next(err);
  }

  res.render('bookinstance_detail', {
    title: 'Book:',
    bookinstance: bookInstance,
  });
});

// display BookInstance create form on GET
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
  const allBooks = await Book.find({}, 'title').sort({ title: 1 }).exec();

  res.render('bookinstance_form', {
    title: 'Create BookInstance',
    book_list: allBooks,
  });
});

// handle BookInstance create on POST
exports.bookinstance_create_post = [
  // validate and sanitize fields
  body('book', 'Book must be specified').trim().isLength({ min: 1 }).escape(),
  body('imprint', 'Imprint must be specified').trim().isLength({ min: 1 }).escape(),
  body('status').escape(),
  body('due_back', 'Invalid date').optional({ values: 'falsy' }).isISO8601().toDate(),

  // process request after validation and sanitization
  asyncHandler(async (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a BookInstance object with escaped and trimmed data
    const bookInstance = new BookInstance({
      book: req.body.book,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due_back,
    });

    if (!errors.isEmpty()) {
      // there are errors
      // render forma gain with sanitized values and error messages
      const allBooks = await Book.find({}, 'title').sort({ title: 1 }).exec();

      res.render('bookinstance_form', {
        title: 'Create BookInstance',
        book_list: allBooks,
        selected_book: bookInstance.book._id,
        errors: errors.array(),
        bookinstance: bookInstance,
      });

      return;
    } else {
      // data from form is valid
      await bookInstance.save();
      res.redirect(bookInstance.url);
    }
  }),
];

// display BookInstance delete form on GET
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
  const bookinstance = await BookInstance.findById(req.params.id).populate('book').exec();

  if (bookinstance === null) {
    // bookinstance not exist in database, redirect to all book instance
    debug(`id not found in book delete get: ` + req.params.id);
    res.redirect('/catalog/bookinstances');
  } else {
    // render book instance delete form
    res.render('bookinstance_delete', {
      bookinstance,
      title: 'Delete Book Instance',
    });
  }
});

exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
  // find object and delete in database
  await BookInstance.findByIdAndDelete(req.body.bookinstanceid);
  res.redirect('/catalog/bookinstances');
});

// display BookInstance update form on GET
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
  const [bookinstance, allBooks] = await Promise.all([BookInstance.findById(req.params.id).populate('book').exec(), Book.find({}, 'title').sort({ title: -1 }).exec()]);

  // can't find that bookinstance in database
  if (bookinstance === null) {
    debug(`id not found in book update get: ` + req.params.id);
    const err = new Error('BookInstance Not Found');
    err.status = 404;
    next(err);
  }

  res.render('bookinstance_form', {
    bookinstance,
    title: 'Update Book Instance',
    book_list: allBooks,
    selected_book: bookinstance.book._id,
  });
});

// handle bookinstance update on POST
exports.bookinstance_update_post = [
  // validate and sanitize form data
  body('book', 'Book must be specified').trim().isLength({ min: 1 }).escape(),
  body('imprint', 'Imprint must be specified').trim().isLength({ min: 1 }).escape(),
  body('due_back', 'Invalid date').optional({ values: 'falsy' }).isISO8601().toDate(),
  body('status').escape(),

  //
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const allBooks = await Book.find({}, 'title').sort({ title: 1 }).exec();

    const bookinstance = new BookInstance({
      imprint: req.body.imprint,
      due_back: req.body.due_back,
      status: req.body.status,
      _id: req.params.id,
      book: req.body.book,
    });

    //
    if (!errors.isEmpty()) {
      res.render('bookinstance_form', {
        title: 'Update Book Instance',
        bookinstance,
        selected_book: bookinstance.book,
        errors: errors.array(),
        book_list: allBooks,
      });
    } else {
      const updateBookinstance = await BookInstance.findByIdAndUpdate(req.params.id, bookinstance, {});

      res.redirect(updateBookinstance.url);
    }
  }),
];
