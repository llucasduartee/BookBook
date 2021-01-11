import React from "react";
import { Typography, Button } from "antd";
import { LoginOutlined, ProfileOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLogin, showSignUp } from "../../redux/actions/home-states-actions";
import { ModalDiv, Overlay, ButtonDiv } from "./style";

const { Title } = Typography;

const PopUp = ({ isOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const RedirectLogin = () => {
    history.push({ pathname: "/", state: dispatch(showLogin()) });
  };
  const RedirectSignup = () => {
    history.push({ pathname: "/", state: dispatch(showSignUp()) });
  };

  if (!isOpen) return null;
  return (
    <>
      <Overlay>
        <ModalDiv>
          <Title level={2}>Opa, parece que você não está logado!</Title>
          <Title level={4}>
            {" "}
            Para poder acessar os livros e adicioná-los a sua estante, você
            precisa estar logado.
          </Title>
          <br />
          <ButtonDiv>
            <Button
              type="primary"
              shape="round"
              icon={<LoginOutlined />}
              size="large"
              onClick={RedirectLogin}
            >
              Fazer Login
            </Button>
          </ButtonDiv>
          <ButtonDiv>
            <Button
              type="primary"
              shape="round"
              icon={<ProfileOutlined />}
              size="large"
              onClick={RedirectSignup}
            >
              Criar Conta
            </Button>
          </ButtonDiv>
        </ModalDiv>
      </Overlay>
    </>
  );
};

export default PopUp;
