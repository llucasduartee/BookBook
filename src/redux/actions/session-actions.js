import { LOGIN_ERROR, LOGIN, LOGOUT, USER_DATA } from "./type.js";
import axios from "axios";

const login = (token, user) => {
  return { type: LOGIN, token, user };
};

export const loginRequest = (user, password) => (dispatch) => {
  axios
    .post("https://ka-users-api.herokuapp.com/authenticate", {
      user,
      password,
    })
    .then(({ data }) => {
      dispatch(login(data.auth_token, data.user));
      localStorage.setItem("token", data.auth_token);
      localStorage.setItem("user", JSON.stringify(data.user));
    })
    .catch(({ response }) => {
      if (response.status === 401) {
        console.log(response.data);
        return dispatch(loginError(response.data.error.user_authentication));
      }
    });
};

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => {
  localStorage.clear();
  return { type: LOGOUT };
};

const changeUserLocal = (userData) => ({
  type: USER_DATA,
  userData,
});

export const requestChangeDataUser = (
  userId,
  data,
  config,
  setShowDataUser,
  successNotification,
  errorNotification
) => (dispatch) => {
  return axios
    .put(`https://ka-users-api.herokuapp.com/users/${userId}`, data, config)
    .then((res) => {
      dispatch(changeUserLocal(res.data));
      if (JSON.stringify(res.data) === localStorage.getItem("user")) {
        errorNotification();
      } else {
        setShowDataUser(true);
        successNotification("bottomRight");
      }
      localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch((res) => {
      errorNotification("bottomRight");
    });
};
