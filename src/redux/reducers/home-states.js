import { SHOW_LOGIN, SHOW_SIGNUP } from "../actions/type";

const defaultState = { loginForm: false, signUpForm: false };

const homeStates = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return { ...state, loginForm: true, signUpForm: false };
    case SHOW_SIGNUP:
      return { ...state, loginForm: false, signUpForm: true };
    default:
      return state;
  }
};

export default homeStates;
