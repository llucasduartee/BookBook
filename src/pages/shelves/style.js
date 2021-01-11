import styled from "styled-components";
import { Row, Col } from "antd";

export const GraphicDiv = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 1200px) {
    width: 100vw;
    margin-left: 20vw;
    margin-bottom: 60px;
    margin-top: -40px;
  }
`;

export const Container = styled.div`
  margin-left: -20vw;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
  margin-left: 50vh;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 38%;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 0;
    margin-right: -20vw;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  color: #5f93a9;

  @media (max-width: 1200px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  margin-left: 40%;
  padding-top: 2%;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 20vw;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40%;
  width: 40%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-left: 20vw;
    width: 70vw;
  }

  @media (max-width: 380px) {
    margin-left: 20vw;
    width: 80vw;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-top: 160px;
    margin-left: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 540px) {
    margin-top: 100px;
  }
`;

export const ShelfTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  color: #5f93a9;
  margin-left: 50%;
  font-weight: bolder;
  padding-top: 65px;
`;

export const ShelfSelect = styled.a`
  background-color: transparent;
  width: 150px;
  height: 50px;
  outline: none;

  border-radius: 30px;
  &:hover {
    background-color: rgba(95, 147, 169, 0.2);
  }

  @media (max-width: 1200px) {
    padding: 8px;
    margin: 4px;
    width: fit-content;
    border-radius: 8px;
  }
`;

export const ButtonText = styled.p`
  font-size: 18px;
  color: #5f93a9;
  margin-left: 40px;
  padding-top: 10px;

  @media (max-width: 1200px) {
    font-size: 24px;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 720px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  color: #5f93a9;
  margin-left: 50%;
  margin-bottom: -70px;
  padding-top: 25px;

  @media (max-width: 1200px) {
    margin-left: 20vw;
    text-align: center;
    width: 80vw;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
