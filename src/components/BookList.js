import React from 'react';
import ProtoTypes from 'prop-types';
import BookItem from './BookItem';
import AddBook from './AddBook';
import './BookList.css';

function BookList(props) {
  const { booksprop } = props;
  return (
    <>
      <div className="book-list">
        {booksprop.map((book) => (
          <BookItem key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <AddBook />
    </>
  );
}

BookList.propTypes = {
  booksprop: ProtoTypes.string.isRequired,
};

export default BookList;
