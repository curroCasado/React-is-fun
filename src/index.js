import React from "react";
import { render } from "react-dom";
import Library from "./Library";

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

render(<Library books={bookList} />, document.getElementById("root"));
