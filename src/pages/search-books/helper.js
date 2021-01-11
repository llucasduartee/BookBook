import { postAPIBookBook } from "../../redux/actions/user-books-actions";

export const selectedShelf = (dispatch, user, config, book, shelf) => {
  dispatch(
    postAPIBookBook(
      user.id,
      book.volumeInfo.title,
      book.volumeInfo.authors,
      shelf,
      book.volumeInfo.imageLinks,
      book.volumeInfo.categories,
      book.id,
      config
    )
  );
};
