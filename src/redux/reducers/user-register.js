import { NEW_REGISTER } from "../actions/type";
import { SUCCESS } from "../actions/type";

const defaultState = { user: {} };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_REGISTER:
      return { ...state, user: action.user };
    case SUCCESS:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
