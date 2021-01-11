import { moveUserBook } from "../../redux/actions/user-books-actions";

export const movedShelf = (dispatch, book, shelf) => {
  dispatch(moveUserBook(book, shelf));
};

export const shelf = (userBooks, shelf) => {
  return userBooks.filter((book) => book.shelf === shelf);
};
