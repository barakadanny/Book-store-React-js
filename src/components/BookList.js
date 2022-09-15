import React from "react";
import BookItem from "./BookItem";
import AddBook from "./AddBook";

function BookList(props) {
  return (
    <>
      <div className="book-list">
        {props.booksprop.map((book) => (
          <BookItem key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <AddBook />
    </>
  );
}

export default BookList;
