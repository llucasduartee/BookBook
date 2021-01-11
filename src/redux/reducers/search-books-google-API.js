import { SEARCH_BOOKS_API } from "../actions/type.js";
const defaultState = [];

const searchBooksGoogleAPI = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_API:
      return [...action.booksAPI];

    default:
      return state;
  }
};

export default searchBooksGoogleAPI;
