const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 2 },
});

// virtual for genre's URL
GenreSchema.virtual('url').get(function () {
  // we don't use an arrow function as we'll need this object
  return `/catalog/genre/${this._id}`;
});

// export model
module.exports = mongoose.model('Genre', GenreSchema);
