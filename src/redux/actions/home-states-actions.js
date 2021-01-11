import { SHOW_LOGIN, SHOW_SIGNUP } from "./type";

export const showLogin = () => {
  return { type: SHOW_LOGIN };
};

export const showSignUp = () => {
  return { type: SHOW_SIGNUP };
};
