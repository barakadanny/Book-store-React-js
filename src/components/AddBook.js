import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/books";
import "./AddBook.css";

function AddBook() {
  const dispatch = useDispatch();
  const [bookItem, setBookItem] = useState({ title: "", author: "" });

  const input = (e) => {
    // setBookItem({ ...bookItem, [e.target.name]: e.target.value });
    e.preventDefault();
    const field = e.target.name;

    switch (field) {
      case "title":
        setBookItem({ ...bookItem, title: e.target.value });
        break;
      case "author":
        setBookItem({ ...bookItem, author: e.target.value });
        break;
      default:
        setBookItem({ author: bookItem.author, title: bookItem.title });
    }
  };

  return (
    <div className="add-book">
      <form className="add-book-content">
        <input
          className="title-inp"
          name="book"
          type="text"
          placeholder="Book title"
          function={input}
        />
        <input
          className="author-inp"
          name="author"
          type="text"
          placeholder="Author name"
          function={input}
        />
        <select name="Category" id="lang">
          <option value="Category" disabled selected>
            Category
          </option>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
        </select>
        <input
          className="btn"
          type="submit"
          value="Add book"
          onClick={() => dispatch(addBook(bookItem))}
        />
      </form>
    </div>
  );
}

export default AddBook;
