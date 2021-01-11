import { ADD_BOOK_REVIEWS } from "./type.js";
import axios from "axios";

const addBookReviewsAPI = (addBook) => ({
  type: ADD_BOOK_REVIEWS,
  addBook,
});

export const requestBookReviewsApi = (config) => (dispatch) => {
  return axios
    .get("https://ka-users-api.herokuapp.com/book_reviews", config)
    .then((res) => {
      dispatch(addBookReviewsAPI(res.data));
    });
};
