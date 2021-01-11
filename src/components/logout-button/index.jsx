import React from "react";
import logoutIcon from "../../images/logout-icon-this.png";
import watermark from "../../images/watermark-this-test.png";
import { logout } from "../../redux/actions/session-actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Icon, Watermark } from "./style";

const LogoutButton = () => {
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(logout());
  };

  return (
    <>
      <Watermark id="watermark" src={watermark} />
      <Button onClick={handleCLick}>
        {token === null && <Redirect to="/" />}
        <Icon src={logoutIcon} alt="Logout icon." title="Logout" />
      </Button>
    </>
  );
};

export default LogoutButton;
