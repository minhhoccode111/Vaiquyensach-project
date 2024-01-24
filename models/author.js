const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// virtual for author's full name
AuthorSchema.virtual('name').get(function () {
  // to avoid errors in cases where an author does not have either a family name or first name
  // we want to make sure we handle the exception by returning an empty string for that case
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
  // we don't use an arrow function as we'll need this object
  return `/catalog/author/${this._id}`;
});

// virtual for author's day_of_birth and day_of_death formatted
AuthorSchema.virtual('lifespan').get(function () {
  return (
    (this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '') +
    ' - ' +
    (this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '')
  );
});

// virtual for author's day_of_birth format yyyy-mm-dd to fill in update form
AuthorSchema.virtual('date_of_birth_yyyy_mm_dd').get(function () {
  if (this.date_of_birth) {
    const d = new Date(this.date_of_birth);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const date = d.getDate().toString().padStart(2, '0');
    console.log(`${year}-${month}-${date}`);
    return `${year}-${month}-${date}`;
  }
});

// virtual for author's day_of_death format yyyy-mm-dd to fill in update form
AuthorSchema.virtual('date_of_death_yyyy_mm_dd').get(function () {
  if (this.date_of_death) {
    const d = new Date(this.date_of_death);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const date = d.getDate().toString().padStart(2, '0');
    console.log(`${year}-${month}-${date}`);
    return `${year}-${month}-${date}`;
  }
});

// export model
module.exports = mongoose.model('Author', AuthorSchema);
