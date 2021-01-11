import {
  USER_BOOKS,
  ONE_BOOK,
  REMOVE_ONE_BOOK,
  MOVE_USER_BOOK,
  CHANGE_USER_BOOK,
} from "./type";
import axios from "axios";
import Cover from "../../assets/cover.jpg";

const userBooks = (userBooks) => ({
  type: USER_BOOKS,
  userBooks,
});

export const requestUserBooks = (id, token) => (dispatch) => {
  return axios
    .get(`https://ka-users-api.herokuapp.com/users/${id}/books/`, token)
    .then((res) => {
      dispatch(userBooks(res.data));
    });
};

export const addOneBook = (addOneBook) => ({
  type: ONE_BOOK,
  addOneBook,
});

export const postAPIBookBook = (
  id,
  title,
  author,
  shelf,
  image_url,
  categories,
  google_book_id,
  config
) => (dispatch) => {
  return axios
    .post(
      `https://ka-users-api.herokuapp.com/users/${id}/books/`,
      {
        book: {
          title: title === undefined ? "No title" : title,
          author: author === undefined ? "No author" : author.join(","),
          shelf: shelf,
          image_url: image_url === undefined ? Cover : image_url.smallThumbnail,
          // grade: 1,
          categories:
            categories === undefined ? "No category" : categories.join(","),
          // review: "Gostei!",
          google_book_id: google_book_id,
        },
      },
      config
    )
    .then((res) => {
      dispatch(addOneBook(res.data));
    });
};

export const removeOneBook = (removeOneBook) => ({
  type: REMOVE_ONE_BOOK,
  removeOneBook,
});

export const moveUserBook = (moveUserBook, shelf) => ({
  type: MOVE_USER_BOOK,
  moveUserBook,
  shelf,
});

const changeUserBook = (changeUserBook) => ({
  type: CHANGE_USER_BOOK,
  changeUserBook,
});

export const changeEvaluateBook = (
  userId,
  bookId,
  values,
  config,
  handleOk
) => (dispatch) => {
  return axios
    .put(
      `https://ka-users-api.herokuapp.com/users/${userId}/books/${bookId}`,
      values,
      config
    )
    .then((res) => {
      dispatch(changeUserBook(res.data));
      handleOk();
    });
};
