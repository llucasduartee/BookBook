import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { success } from "../../redux/actions/user-register-actions";
import { requestPostUsers } from "../../redux/actions/sign-up-error-actions";
import { showLogin } from "../../redux/actions/home-states-actions";
import { layout, validateMessages } from "./helper";
import { NewStyledForm } from "./style";

const SignUpForm = () => {
  const errorMessage = useSelector((state) => state.signUpError.signUpError);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [successMessage, setSuccess] = useState("");

  const onFinish = (values) => {
    dispatch(requestPostUsers(values));
  };

  useEffect(() => {
    if (user.status === 201) {
      setTimeout(() => dispatch(showLogin()), 1000);
      setSuccess("Usuário criado com sucesso!");
      dispatch(success());
    }
  }, [user, errorMessage]);

  return (
    <>
      <NewStyledForm
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
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
            {
              required: true,
            },
          ]}
        >
          <Input />
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
              required: true,
              min: 6,
            },
          ]}
        >
          <Input />
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
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "password"]}
          label="Senha"
          validateTrigger={false}
          hasFeedback
          rules={[
            {
              min: 6,
              message: "A senha deve conter pelo menos 6 caracteres.",
            },
            {
              pattern: /[^a-zA-Z 0-9]+/g,
              message: "Senha deve conter pelo menos um caractere especial.",
            },
            {
              required: true,
              message: "Por favor insira sua senha.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          extra={
            errorMessage.other && (
              <span style={{ color: "red" }}>{errorMessage.other}</span>
            )
          }
          extra={
            successMessage && (
              <span style={{ color: "green" }}>{successMessage}</span>
            )
          }
          name={["user", "password_confirmation"]}
          label="Confirmar Senha"
          dependencies={["user", "password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Por favor, confirme sua senha.",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue(["user", "password"]) === value) {
                  return Promise.resolve();
                }
                return Promise.reject("As senhas não estão combinando.");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button shape="round" type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </NewStyledForm>
    </>
  );
};

export default SignUpForm;
