import { SEARCH_BOOKS_API } from "./type.js";
import axios from "axios";

const searchBooksAPI = (booksAPI) => ({
  type: SEARCH_BOOKS_API,
  booksAPI,
});

export const requestBooksAPI = (books) => (dispatch) => {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${books}&maxResults=40`)
    .then((res) => {
      dispatch(searchBooksAPI(res.data.items));
    });
};
