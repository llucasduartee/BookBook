import { LOGIN, LOGOUT, USER_DATA } from "../actions/type";

const defaultState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const session = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token, user: action.user };

    case LOGOUT:
      return { token: null, user: {} };

    case USER_DATA:
      return { ...state, user: action.userData };

    default:
      return state;
  }
};

export default session;
