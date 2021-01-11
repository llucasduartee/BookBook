import styled from "styled-components";
import { Card, Input } from "antd";

const { Search } = Input;

export const TitleDiv = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2vw;
`;

export const NewCard = styled(Card)`
  border-radius: 15px;
  margin-right: 30px;
  margin-top: 15px;
  margin-bottom: 10px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  background-color: #dfe3ee;
  width: 300px;
`;

export const CardImg = styled.img`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const BookTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

export const BookDescription = styled.p`
  font-size: 12px;
  color: black;
`;

export const Container = styled.div`
  @media (max-width: 1200px) {
    margin-top: 160px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 540px) {
    margin-top: 100px;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  margin-left: 26vw;
  width: 70vw;

  @media (max-width: 1200px) {
    margin-left: 10vw;
    width: 80vw;
  }

  @media (max-width: 540px) {
    margin-left: 0vw;
    margin-bottom: 32px;
  }
  @media (max-height: 720px) {
    margin-bottom: 64px;
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

  @media (max-width: 540px) {
    font-size: 32px;
  }

  @media (max-width: 350px) {
    font-size: 24px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  width: 110vh;
  position: absolute;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background-color: white;
  background-repeat: repeat;

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 80vw;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardDiv = styled.div`
  display: flex;
  margin-left: 30%;
  align-items: center;
  justify-content: center;
  padding-top: 25vh;
  margin-right: 15%;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 1200px) {
    width: 60vw;
    margin-left: 20vw;
    display: flex;
    align-items: center;
  }

  @media (max-width: 390px) {
    width: 80vw;
    margin-left: 20vw;
  }
`;

export const SearchInput = styled(Search)`
  .ant-input {
    border-radius: 999px;
    border: 1px solid #5f93a9;
  }
`;
