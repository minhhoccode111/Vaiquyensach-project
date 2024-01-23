const Genre = require('../models/genre');
const Book = require('../models/book');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// display list of all Genre
exports.genre_list = asyncHandler(async (req, res, next) => {
  const allGenres = await Genre.find().sort({ name: 1 }).exec();

  res.render('genre_list', { title: 'Genre List', genre_list: allGenres });
});

// display detail page for a specific Genre
exports.genre_detail = asyncHandler(async (req, res, next) => {
  const [genre, booksInGenre] = await Promise.all([Genre.findById(req.params.id).exec(), Book.find({ genre: req.params.id }, 'title summary').exec()]);

  if (genre === null) {
    // no results
    const err = new Error('Genre not found');
    err.status = 404;
    // pass err object to next middleware
    return next(err);
  }

  res.render('genre_detail', {
    genre,
    title: 'Genre Detail',
    genre_books: booksInGenre,
  });
});

// display Genre create form on GET
exports.genre_create_get = (req, res, next) => {
  res.render('genre_form', { title: 'Create Genre' });
};

// handle Genre create on POST
exports.genre_create_post = [
  // validate and sanitize the name field
  body('name', 'Genre name must contain at least 3 characters').trim().isLength({ min: 3 }).escape(),

  // process request after validation and sanitization
  asyncHandler(async (req, res, next) => {
    // extract the validation errors from a request
    const errors = validationResult(req);

    // create a genre object with escaped and trimmed data
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // there are errors. Render the form again with sanitized values/error message
      res.render('genre_form', {
        genre,
        title: 'Create Genre',
        errors: errors.array(),
      });
      return;
    } else {
      // data from form is valid
      // check if Genre with same name already exists
      const genreExists = await Genre.findOne({ name: req.body.name }).exec();
      if (genreExists) {
        // genre exists, redirect to its detail page
        res.redirect(genreExists.url);
      } else {
        await genre.save();
        // new genre saved. redirect to genre detail page
        res.redirect(genre.url);
      }
    }
  }),
];

// display Genre delete form on GET
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
  const [genre, booksInGenre] = await Promise.all([Genre.findById(req.params.id).exec(), Book.find({ genre: req.params.id }).populate('author').exec()]);

  if (genre === null) {
    // if genre don't exist in database, then redirect
    res.redirect('/catalog/genres');
  }

  res.render('genre_delete', {
    genre,
    title: 'Delete Genre',
    genre_books: booksInGenre,
  });
});

// handle Genre delete on POST
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
  const [genre, booksInGenre] = await Promise.all([Genre.findById(req.params.id).exec(), Book.find({ genre: req.params.id }).populate('author').exec()]);

  if (booksInGenre.length > 0) {
    // there is still books in genre, we render like GET request
    res.render('genre_delete', {
      genre,
      title: 'Delete Genre',
      genre_books: booksInGenre,
    });
  } else {
    // genre has no books, delete object and return to list of genre
    await Genre.findByIdAndDelete(req.body.genreid);
    res.redirect('/catalog/genres');
  }
});

// display Genre update form on GET
exports.genre_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre update GET');
});

// handle Genre update on POST
exports.genre_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Genre update POST');
});
