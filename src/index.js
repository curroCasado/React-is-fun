import React, { Component } from "react";
import { render } from "react-dom";
import PropsTypes from "prop-types";

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

const Book = ({
  // set the Default values
  title = "No Title Provided",
  author = "No Author",
  pages = 0,
  freeBookmark
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
    </section>
  );
};

const Hiring = () => (
  <div>
    <p>The library is hiring. Go to www.library.com/job for more.</p>
  </div>
);
const NotHiring = () => (
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>
);

class Library extends Component {
  static defaultProps = {
    //Defult value
    books: [
      {
        title: "Cien Anos the Soledad",
        author: "Gabriel Garcia Marquez",
        pages: 800
      }
    ]
  };
  state = {
    open: true,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));

    console.log("The component is now mounted!");
  }
  componentDidUpdate() {
    console.log("The component just updated!");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>
          {this.state.open ? "close" : "open"}
        </button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

//Set a type value that helps in the debugging
Library.propTypes = { books: PropsTypes.array };
Book.propTypes = {
  title: PropsTypes.string,
  author: PropsTypes.string,
  pages: PropsTypes.number,
  freeBookmark: PropsTypes.bool
};

render(<Library books={bookList} />, document.getElementById("root"));
