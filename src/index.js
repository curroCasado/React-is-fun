import React, { Component } from "react";
import { render } from "react-dom";

let bookList = [
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", pages: 1595 },
  {
    title: "Harry Potter and the Philosopher stone",
    author: "J. K. Rowling",
    pages: 300
  },
  {
    title: "Harry Potter and Prisioner of Azkaban",
    author: "J. K. Rowling",
    pages: 294
  },
  {
    title: "Harry Potter and the secret chamber",
    author: "J. K. Rowling",
    pages: 460
  }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

const Library = ({ books }) => {
  return (
    <div>
      {books.map((book, i) => (
        <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

render(<Library books={bookList} />, document.getElementById("root"));
