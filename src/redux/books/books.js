import { createAsyncThunk } from '@reduxjs/toolkit';

// redux actions
const ADD_BOOK = 'book-store/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/src/redux/books/REMOVE_BOOK';
const DISPLAY_BOOK = 'book-store/src/redux/books/DISPLAY_BOOKS';

const init = [];

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case 'book-store/src/redux/books/REMOVE_BOOK/fulfilled':
      return state.filter((book) => book.id !== action.payload.id);

    case 'book-store/src/redux/books/DISPLAY_BOOKS/fulfilled':
      return action.payload;

    default:
      return state;
  }
}

// redux actions
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rRu8u7fR7sncSsKAbO3p/books',
    {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rRu8u7fR7sncSsKAbO3p/books/${id}`,
    {
      method: 'DELETE',
    },
  );
  return id;
});

export const displayBooks = createAsyncThunk(DISPLAY_BOOK, async () => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rRu8u7fR7sncSsKAbO3p/books',
  );
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});
