import styled from "styled-components";
import { Col } from "antd";
import { blueLucas, colorDarker } from "../../helper/color-config";

export const ContentContainer = styled.div`
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

export const Content = styled.p`
  padding: 10%;
  font-family: "Lora", serif;
  font-size: 26px;
  text-align: center;
  color: grey;
`;

export const Coll = styled(Col)`
  @media (max-width: 800px) {
    display: block;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;
  background-color: ${blueLucas};
`;

export const LoginImg = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  @media (max-width: 800px) {
    width: 0;
    height: 0;
  }
`;

export const LoginDiv = styled.div`
  width: 75%;
  margin-top: 50px;
  border-radius: 15px;
  margin-left: 15%;
  background-color: white;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15%;

  @media (max-width: 800px) {
    margin-bottom: -40px;
    margin-top: -40px;
  }
`;

export const TextButton = styled.button`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
  color: gray;
  cursor: pointer;

  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
    color: ${colorDarker};
    transition: 0.6s;
  }
  &:active {
  }

  @media (max-width: 800px) {
    font-size: 22px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  font-family: "Montserrat";
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
  color: gray;
`;
