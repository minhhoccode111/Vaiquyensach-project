const Author = require('../models/author');
const Book = require('../models/book');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// display list of all Authors
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
  res.render('author_list', {
    title: 'Author List',
    author_list: allAuthors,
  });
});

// display detail page for a specific Author
exports.author_detail = asyncHandler(async (req, res, next) => {
  // get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([Author.findById(req.params.id).exec(), Book.find({ author: req.params.id }, 'title summary').exec()]);

  if (author === null) {
    // no results
    const err = new Error('Author not found');
    err.status = 404;
    return next(err);
  }

  res.render('author_detail', {
    author,
    title: 'Author Detail',
    author_books: allBooksByAuthor,
  });
});

// display Author create form on GET
exports.author_create_get = (req, res, next) => {
  res.render('author_form', { title: 'Create Author' });
};

// handle Author create on POST
exports.author_create_post = [
  // validate and sanitize fields
  body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.').isAlphanumeric().withMessage('First name has non-alphanumeric character.'),
  body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified').isAlphanumeric().withMessage('Family name has non-alphanumeric character.'),
  body('date_of_birth', 'Invalid date of birth').optional({ values: 'falsy' }).isISO8601().toDate(),
  body('date_of_death', 'Invalid date of death').optional({ values: 'falsy' }).isISO8601().toDate(),
  // process request after validation and sanitization
  asyncHandler(async (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });

    if (!errors.isEmpty()) {
      // there are errors. render form again with sanitized values/errors message
      res.render('author_form', {
        author,
        title: 'Create Author',
        errors: errors.array(),
      });
      return;
    } else {
      // data from form is valid

      // save author
      await author.save();
      // redirect to new author record
      res.redirect(author.url);
    }
  }),
];

// display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  // get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([Author.findById(req.params.id).exec(), Book.find({ author: req.params.id }, 'title summary').exec()]);

  if (author === null) {
    // no results - means author is not in the database
    res.redirect('/catalog/authors');
  } else {
    res.render('author_delete', {
      author,
      title: 'Delete Author',
      author_books: allBooksByAuthor,
    });
  }
});

// handle Author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  // get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([Author.findById(req.params.id).exec(), Book.find({ author: req.params.id }, 'title summary').exec()]);

  if (allBooksByAuthor.length > 0) {
    // author has books, render in same way as for GET route
    res.render('author_delete', {
      author,
      title: 'Delete Author',
      author_books: allBooksByAuthor,
    });
  } else {
    // author has no books, delete object and redirect to the list of authors
    await Author.findByIdAndDelete(req.body.authorid);
    res.redirect('/catalog/authors');
  }
});

// display Author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id);

  if (author === null) {
    const err = new Error('Author not found');
    err.status = 404;
    next(err);
  }

  res.render('author_form', {
    author,
    title: 'Update Author',
  });
});

// handle Author update on POST
exports.author_update_post = [
  // validate and sanitize fields
  body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.').isAlphanumeric().withMessage('First name has non-alphanumeric character.'),
  body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified').isAlphanumeric().withMessage('Family name has non-alphanumeric character.'),
  body('date_of_birth', 'Invalid date of birth').optional({ values: 'falsy' }).isISO8601().toDate(),
  body('date_of_death', 'Invalid date of death').optional({ values: 'falsy' }).isISO8601().toDate(),
  // process request after validation and sanitization
  asyncHandler(async (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      // there are errors. render form again with sanitized values/errors message
      res.render('author_form', {
        author,
        title: 'Update Author',
        errors: errors.array(),
      });
      return;
    } else {
      // data from form is valid

      // save author
      const updateAuthor = await Author.findByIdAndUpdate(req.params.id, author, {});
      // redirect to new author record
      res.redirect(updateAuthor.url);
    }
  }),
];
