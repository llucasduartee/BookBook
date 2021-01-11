import { SIGN_UP_ERROR } from "../actions/type";

const defaultState = { signUpError: {} };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_UP_ERROR:
      return { ...state, signUpError: action.error };
    default:
      return state;
  }
};

export default reducer;
