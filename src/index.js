import React, { Component } from "react";
import { render } from "react-dom";

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

const Library = () => {
  return (
    <div>
      <Book
        title="The Lord of the Rings"
        author="J. R. R. Tolkien"
        pages={1595}
      />
      <Book
        title="Harry Potter and the Philosopher stone"
        author="J. K. Rowling"
        pages={300}
      />
      <Book
        title="Harry Potter and Prisioner of Azkaban"
        author="J. K. Rowling"
        pages={293}
      />
    </div>
  );
};

render(<Library />, document.getElementById("root"));
