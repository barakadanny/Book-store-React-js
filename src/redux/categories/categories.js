const CHECK_STATUS = 'book-store/src/redux/categories/CHECK_STATUS';

const init = [];

export default function categoriesReducer(state = init, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const checkStatus = (category) => ({
  type: CHECK_STATUS,
  payload: category,
});
