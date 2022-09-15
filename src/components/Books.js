import React from 'react';
import BookList from './BookList';

function Books() {
  // object containing books
  const book = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
  ];

  return (
    <div className="books-container">
      <BookList booksprop={book} />
    </div>
  );
}

export default Books;
