import React, { useState, useEffect } from "react";
import { Form, Button, notification, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { requestChangeDataUser } from "../../redux/actions/session-actions";
import { layout, validateMessages } from "../sign-up-form/helper";
import { SmileOutlined, FrownOutlined, UserOutlined } from "@ant-design/icons";
import BookmarkAside from "../../components/bookmark";
import LogoutButton from "../../components/logout-button";
import { requestUserBooks } from "../../redux/actions/user-books-actions";
import Graphic from "../../components/graphics";
import { axiosConfig } from "../../helper/axios-config";
import {
  GraphicDiv,
  ScreenAdjuster,
  NewStyledForm,
  NewInput,
  AvatarDiv,
  MainDiv,
} from "./style";

const Profile = () => {
  const errorMessage = useSelector((state) => state.signUpError.signUpError);
  const user = useSelector((state) => state.session.user);
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();
  const [showDataUser, setShowDataUser] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (user.id !== undefined) {
      dispatch(requestUserBooks(user.id, axiosConfig(token)));
    }
  }, []);

  const successNotification = () => {
    notification.success({
      message: "Sucesso",
      description: "Dados enviados com sucesso",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const errorNotification = () => {
    notification.error({
      message: "Erro",
      description: "Nenhum dado foi enviado",
      icon: <FrownOutlined style={{ color: "red" }} />,
    });
  };

  const onFinish = (values) => {
    dispatch(
      requestChangeDataUser(
        user.id,
        values,
        axiosConfig(token),
        setShowDataUser,
        successNotification,
        errorNotification
      )
    );
  };

  return (
    <ScreenAdjuster>
      <BookmarkAside />
      <LogoutButton />
      <GraphicDiv>
        <Graphic />
      </GraphicDiv>
      <MainDiv>
        <NewStyledForm
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <AvatarDiv>
            <Avatar size={100} icon={<UserOutlined />} />
            <Button
              onClick={() => setShowDataUser(!showDataUser)}
              shape="round"
              type="primary"
            >
              Alterar dados
            </Button>
          </AvatarDiv>

          <Form.Item
            name={["user", "name"]}
            label="Nome Completo"
            validateTrigger={false}
            rules={[
              {
                pattern: /[A-Za-z]+[ ]+[A-Za-z]{2}/,
                message: "Deve haver pelo menos dois nomes.",
              },
              {
                pattern: /^[a-z ]+$/i,
                message:
                  "Nomes não podem conter caracteres especiais, incluindo acentuação.",
              },
            ]}
          >
            <NewInput defaultValue={user.name} disabled={showDataUser} />
          </Form.Item>
          <Form.Item
            validateTrigger={false}
            extra={
              errorMessage.user && (
                <span style={{ color: "red" }}>User {errorMessage.user}</span>
              )
            }
            name={["user", "user"]}
            label="Usuário"
            rules={[
              {
                min: 6,
              },
            ]}
          >
            <NewInput defaultValue={user.user} disabled={showDataUser} />
          </Form.Item>
          <Form.Item
            validateTrigger={false}
            extra={
              errorMessage.user && (
                <span style={{ color: "red" }}>User {errorMessage.user}</span>
              )
            }
            name={["user", "address"]}
            label="Endereço"
          >
            <NewInput defaultValue={user.address} disabled={showDataUser} />
          </Form.Item>
          <Form.Item
            validateTrigger={false}
            extra={
              errorMessage.user && (
                <span style={{ color: "red" }}>User {errorMessage.user}</span>
              )
            }
            name={["user", "cellphone"]}
            label="Telefone"
          >
            <NewInput defaultValue={user.cellphone} disabled={showDataUser} />
          </Form.Item>
          <Form.Item
            extra={
              errorMessage.email && (
                <span style={{ color: "red" }}>Email {errorMessage.email}</span>
              )
            }
            name={["user", "email"]}
            label="E-mail"
            validateTrigger={false}
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <NewInput defaultValue={user.email} disabled={showDataUser} />
          </Form.Item>
          <Form.Item
            validateTrigger={false}
            extra={
              errorMessage.user && (
                <span style={{ color: "red" }}>User {errorMessage.user}</span>
              )
            }
            name={["user", "about"]}
            label="Sobre você"
          >
            <NewInput.TextArea
              defaultValue={user.about}
              disabled={showDataUser}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            {showDataUser === false ? (
              <Button shape="round" type="primary" htmlType="submit">
                Enviar dados
              </Button>
            ) : (
              ""
            )}
          </Form.Item>
        </NewStyledForm>
      </MainDiv>
    </ScreenAdjuster>
  );
};

export default Profile;
