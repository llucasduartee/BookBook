import axios from "axios";

export const removeBookAPI = (userId, bookId, token) => () => {
  return axios.delete(
    `https://ka-users-api.herokuapp.com/users/${userId}/books/${bookId}`,
    token
  );
};

export const moveBookAPI = (userId, bookId, shelf, config) => () => {
  return axios.put(
    `https://ka-users-api.herokuapp.com/users/${userId}/books/${bookId}`,
    {
      book: {
        shelf: shelf,
      },
    },
    config
  );
};
