#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// get arguments passed on command line
const userArgs = process.argv.slice(2);

const Book = require('./models/book');
const Author = require('./models/author');
const Genre = require('./models/genre');
const BookInstance = require('./models/bookinstance');

const mongoose = require('mongoose');

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await clearGenres()
    .then(() => console.log('success clear Genres'))
    .catch(console.error);
  await clearAuthors()
    .then(() => console.log('success clear Authors'))
    .catch(console.error);
  await clearBooks()
    .then(() => console.log('success clear Books'))
    .catch(console.error);
  await clearBookInstances()
    .then(() => console.log('success clear Book Instances'))
    .catch(console.error);
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function clearGenres() {
  await Genre.deleteMany({});
}
async function clearAuthors() {
  await Author.deleteMany({});
}
async function clearBooks() {
  await Book.deleteMany({});
}
async function clearBookInstances() {
  await BookInstance.deleteMany({});
}
