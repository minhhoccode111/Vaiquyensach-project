"use strict";
//

const data = [];

function findMatches(wordToMatch, data) {
  return data.filter((book) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return (
      book.author.match(regex) ||
      book.title.match(regex) ||
      book.price.match(regex) ||
      book.category.match(regex)
    );
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, data);
  const html = matchArray
    .map((book) => {
      const regex = new RegExp(this.value, "gi");
      const title = book.title.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const author = book.author.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const price = book.price.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const category = book.category.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${title}, ${author},${category}</span>
        <span class="population">${numberWithCommas(book.price)}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

class Book {
  constructor(title, author, price, category) {
    (this.title = title),
      (this.author = author),
      (this.price = price),
      (this.category = category);
  }
  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPrice() {
    return this.price;
  }

  getCategory() {
    return this.category;
  }
}

function pushBook(title, author, price, category) {
  let book = new Book(title, author, price, category);
  data.push(book);
}

pushBook("Tâm lý học tính cách", "Trâu Hoàng Minh", 110, "Tâm lý");

console.log(data);
