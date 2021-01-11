import React from "react";
import SideBarRow from "../sidebar-row";
import LogoImg from "../../assets/booklogo.png";
import { showLogin, showSignUp } from "../../redux/actions/home-states-actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  LoginIcon,
  SignUpIcon,
  Logo,
  ClickLogo,
  Anchor,
  MainDiv,
} from "./style";

const SideBarVisitor = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const RedirectLogin = () => {
    history.push({ pathname: "/", state: dispatch(showLogin()) });
  };
  const RedirectSignup = () => {
    history.push({ pathname: "/", state: dispatch(showSignUp()) });
  };

  return (
    <MainDiv>
      <ClickLogo href="/">
        <Logo src={LogoImg} alt="Bookbook Logo" />
      </ClickLogo>
      <Anchor onClick={RedirectLogin}>
        <SideBarRow Icon={LoginIcon} title="Login" />
      </Anchor>
      <Anchor onClick={RedirectSignup}>
        <SideBarRow Icon={SignUpIcon} title="Cadastro" />
      </Anchor>
    </MainDiv>
  );
};

export default SideBarVisitor;
