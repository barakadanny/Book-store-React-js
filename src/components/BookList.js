import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';
import './BookList.css';

function BookList() {
  const books = useSelector((state) => state.booksReducer.booksArr);

  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <BookItem key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <AddBook />
    </>
  );
}

export default BookList;
