import { combineReducers, configureStore } from "redux";
import booksReducer from "./books/books";
import categoriesReducer from "./categories/categories";

const rootReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
