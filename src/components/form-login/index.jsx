import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Anchors, StyledForm } from "./style";

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 9 },
};

const FormLogin = ({ submit }) => {
  const errorMessage = useSelector((state) => state.loginError.loginError);
  const onFinish = (values) => {
    submit({ ...values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Usuário"
        name="username"
        validateTrigger={false}
        rules={[
          { required: true, message: "Por favor insira seu usuário." },
          {
            min: 6,
            message: "Toda nome de usuário tem ao menos 6 caracteres.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        validateTrigger={false}
        extra={
          errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>
        }
        rules={[
          { required: true, message: "Por favor insira sua senha." },
          { min: 6, message: "Toda senha tem ao menos 6 caracteres." },
          {
            pattern: /(?=.*[!@#$%^&*~_-])/,
            message: "P.S.: Deve conter ao menos um desses: !@#$%^&*~_-",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button shape="round" type="primary" htmlType="submit">
          Entrar
        </Button>
      </Form.Item>
      <Anchors>
        <Link to="/visitor-page">Entrar como visitante</Link>
      </Anchors>
    </StyledForm>
  );
};

export default FormLogin;
