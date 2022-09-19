import React from 'react';
import './AddBook.css';

function AddBook() {
  return (
    <div className="add-book">
      <form className="add-book-content">
        <input className="title-inp" type="text" placeholder="Book title" />
        <input className="author-inp" type="text" placeholder="Author name" />
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
