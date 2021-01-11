import { ADD_BOOK_REVIEWS } from "../actions/type.js";
const defaultState = [];

const addBookReviews = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK_REVIEWS:
      return [...action.addBook];

    default:
      return state;
  }
};

export default addBookReviews;
