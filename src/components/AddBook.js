import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './AddBook.css';

function AddBook() {
  const dispatch = useDispatch();
  const [bookItem, setBookItem] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setBookItem({ ...bookItem, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-book">
      <form className="add-book-content">
        <input
          className="title-inp"
          name="book"
          type="text"
          placeholder="Book title"
        />
        <input
          className="author-inp"
          name="author"
          type="text"
          placeholder="Author name"
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
