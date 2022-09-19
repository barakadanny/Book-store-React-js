// redux actions
const ADD_BOOK = 'book-store/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/src/redux/books/REMOVE_BOOK';

const init = [];

export default function booksReducer(state = init, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

// redux actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
