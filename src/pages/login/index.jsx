import React from "react";
import { Row } from "antd";
import Img from "../../assets/person.jpg";
import FormLogin from "../../components/form-login";
import SignUpForm from "../sign-up-form";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions/session-actions";
import { showLogin, showSignUp } from "../../redux/actions/home-states-actions";
import {
  ContentContainer,
  Container,
  Content,
  Coll,
  Background,
  LoginImg,
  LoginDiv,
  LoginWrapper,
  TextButton,
  Text,
} from "./style";

const Login = () => {
  const dispatch = useDispatch();
  const homeStates = useSelector((state) => state.homeStates);
  const showLoginForm = homeStates.loginForm;
  const showSignUpForm = homeStates.signUpForm;

  const requestLogin = ({ username, password }) => {
    const user = username;
    dispatch(loginRequest(user, password));
  };

  return (
    <Background>
      <LoginDiv>
        <Row>
          <Coll span={12}>
            <LoginImg src={Img} />
          </Coll>
          <Coll span={12}>
            <LoginWrapper>
              <TextButton
                onClick={() => dispatch(showLogin())}
                className="login-text"
              >
                Login
              </TextButton>{" "}
              <Text>|</Text>{" "}
              <TextButton onClick={() => dispatch(showSignUp())}>
                {" "}
                Registrar-se{" "}
              </TextButton>
            </LoginWrapper>
            <Container>
              <ContentContainer>
                {!showLoginForm && !showSignUpForm && (
                  <Content>
                    <em>"</em> A bookbook é uma rede social para leitores e
                    livros. <em>"</em>
                  </Content>
                )}
                {showLoginForm && <FormLogin submit={requestLogin} />}
                {showSignUpForm && <SignUpForm />}
              </ContentContainer>
            </Container>
          </Coll>
        </Row>
      </LoginDiv>
    </Background>
  );
};

export default Login;
