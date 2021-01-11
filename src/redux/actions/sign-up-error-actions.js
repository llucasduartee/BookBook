import { SIGN_UP_ERROR, NEW_REGISTER } from "./type";
import axios from "axios";

const signUpError = (error) => ({
  type: SIGN_UP_ERROR,
  error,
});

const newRegister = (user) => ({
  type: NEW_REGISTER,
  user,
});

export const requestPostUsers = (user) => (dispatch) => {
  axios
    .post("https://ka-users-api.herokuapp.com/users", { ...user })
    .then((res) => {
      dispatch(newRegister(res));
    })
    .catch((error) => {
      if (error.response.status === 422) {
        return dispatch(
          signUpError({
            user: error.response.data.user,
            email: error.response.data.email,
          })
        );
      }
      signUpError({ other: error.response.data.error });
    });
};
