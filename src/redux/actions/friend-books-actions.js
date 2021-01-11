import { FRIENDS_BOOKS } from "./type";
import axios from "axios";

const friendBooks = (friendBook) => ({
  type: FRIENDS_BOOKS,
  friendBook,
});

export const requestFriendBooks = (id, config) => (dispatch) => {
  axios
    .get(`https://ka-users-api.herokuapp.com/users/${id}/books/`, config)
    .then((res) => {
      dispatch(friendBooks(res.data));
    });
};
