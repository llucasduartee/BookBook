import styled from "styled-components";
import { Row, Col, Card } from "antd";

export const Container = styled.div`
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
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 25vh;
  margin-left: 50vh;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 0;
    margin-right: -20vw;
  }
`;

export const NewCard = styled(Card)`
  border-radius: 15px;
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  background-color: #dfe3ee;
  width: 300px;
`;

export const BookTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
`;
export const BookDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

export const CardImg = styled.img`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  height: 30%;
`;
export const ShelfTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  color: #5f93a9;
  margin-left: 20%;
  font-weight: bolder;
  padding-top: 65px;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`;
export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 20vw;
  }

  @media (max-width: 720px) {
    width: 80vw;
    margin-left: 8vw;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 35%;
  justify-content: space-between;
  width: 50%;
  padding-top: 30px;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 20vw;
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
  margin-bottom: -100px;
  padding-top: 65px;

  @media (max-width: 1200px) {
    margin-left: 20vw;
    text-align: center;
    width: 80vw;
  }

  @media (max-width: 720px) {
    margin-bottom: -160px;
  }
`;
