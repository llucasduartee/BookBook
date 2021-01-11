import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import RestrictedArea from "../restricted-area";
import FreeArea from "../free-area";
import { axiosConfig } from "../../helper/axios-config";

const Authentication = () => {
  const token = useSelector((state) => state.session.token);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      if (location.pathname === "/visitor-page") {
        history.push("/visitor-page");
      } else {
        history.push("/");
      }
    } else {
      axios
        .get("https://ka-users-api.herokuapp.com/users", axiosConfig(token))
        .then(() => {
          if (token === window.localStorage.getItem("token")) {
            if (location.pathname === "/search-books") {
              history.push("/search-books");
            } else if (location.pathname === "/shelves") {
              history.push("/shelves");
            } else if (location.pathname === "/profile") {
              history.push("/profile");
            } else {
              history.push("/timeline");
            }
          }
        });
    }
  }, [token]);

  if (!token) {
    return <FreeArea />;
  }

  if (token) {
    return <RestrictedArea />;
  }
};

export default Authentication;
