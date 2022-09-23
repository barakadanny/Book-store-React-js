import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayBooks } from "../redux/books/books";
import BookItem from "./BookItem";
import AddBook from "./AddBook";
import "./BookList.css";

function BookList() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  console.log(books);

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            index={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
}

export default BookList;
