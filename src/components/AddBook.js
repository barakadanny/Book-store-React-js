import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: Math.floor(Math.random() * 1000),
        title,
        author,
        category: 'Action',
      }),
    );

    setTitle('');
    setAuthor('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <div className="add-book">
      <form className="add-book-content" onSubmit={addBookHandler}>
        <input
          className="title-inp"
          name="book"
          type="text"
          placeholder="Book title"
          onChange={titleChangeHandler}
          value={title}
        />
        <input
          className="author-inp"
          name="author"
          type="text"
          placeholder="Author name"
          onChange={authorChangeHandler}
          value={author}
        />
        <select name="Category" id="lang">
          <option value="Category" disabled selected>
            Category
          </option>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
        </select>
        <input className="btn" type="submit" value="Add book" />
      </form>
    </div>
  );
}

export default AddBook;
