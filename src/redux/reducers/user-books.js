import {
  USER_BOOKS,
  ONE_BOOK,
  REMOVE_ONE_BOOK,
  MOVE_USER_BOOK,
  CHANGE_USER_BOOK,
} from "../actions/type";

const defaultState = [];

const userBooks = (state = defaultState, action) => {
  switch (action.type) {
    case USER_BOOKS:
      return [...action.userBooks];

    case ONE_BOOK:
      return [...state, action.addOneBook];

    case REMOVE_ONE_BOOK:
      const newArray = state.filter(
        (element) => element.id !== action.removeOneBook.id
      );
      return [...newArray];

    case MOVE_USER_BOOK:
      return state.map((element) => {
        if (element.id === action.moveUserBook.id) {
          return { ...element, shelf: action.shelf };
        } else {
          return element;
        }
      });

    case CHANGE_USER_BOOK:
      return state.map((element) => {
        if (element.id === action.changeUserBook.id) {
          return {
            ...element,
            review: action.changeUserBook.review,
            grade: action.changeUserBook.grade,
          };
        } else {
          return element;
        }
      });

    default:
      return state;
  }
};

export default userBooks;
