import { FRIENDS_BOOKS } from "../actions/type";

const defaultState = { friend: [] };

const friendsBooks = (state = defaultState, action) => {
  switch (action.type) {
    case FRIENDS_BOOKS:
      return {
        ...state,
        friend: action.friendBook,
      };
    default:
      return state;
  }
};

export default friendsBooks;
