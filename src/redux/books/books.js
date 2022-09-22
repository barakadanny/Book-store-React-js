import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import key from "../FetchApi/apiKey";

// redux actions
const ADD_BOOK = "book-store/src/redux/books/ADD_BOOK";
const REMOVE_BOOK = "book-store/src/redux/books/REMOVE_BOOK";
const DISPLAY_BOOK = "book-store/src/redux/books/DISPLAY_BOOKS";

const init = {
  booksArr: [
    {
      id: 1,
      title: "The Hunger Games",
      author: "Suzanne Collins",
    },
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
    },
    {
      id: 3,
      title: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
    },
  ],
};

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case DISPLAY_BOOK:
      return state.concat(action.payload);

    default:
      return state;
  }
}

// redux actions
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rRu8u7fR7sncSsKAbO3p/books`,
    {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return book;
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const displayBooks = (payload) => ({
  type: DISPLAY_BOOK,
  payload,
});
