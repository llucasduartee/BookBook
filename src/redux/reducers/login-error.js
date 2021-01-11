import { LOGIN_ERROR } from "../actions/type";

const defaultState = { signUpError: {} };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, loginError: action.error };
    default:
      return state;
  }
};

export default reducer;
