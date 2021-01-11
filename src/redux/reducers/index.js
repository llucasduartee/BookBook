import { combineReducers } from "redux";
import searchBooksGoogleAPI from "./search-books-google-API";
import userBooks from "./user-books";
import session from "./session";
import user from "./user-register";
import signUpError from "./sign-up-error";
import loginError from "./login-error";
import friend from "./friends-books";
import addBookReviews from "./add-book-reviews";
import homeStates from "./home-states";

export default combineReducers({
  searchBooksGoogleAPI,
  userBooks,
  user,
  signUpError,
  loginError,
  session,
  friend,
  addBookReviews,
  homeStates,
});
