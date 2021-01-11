import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
  @media (max-width: 1200px) {
    margin-top: 200px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 540px) {
    margin-top: 120px;
  }
`;

export const SearchDiv = styled.div`
  display: flex;
  margin-left: 30%;

  @media (max-width: 1200px) {
    margin-left: 0;
    width: 80vw;
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

  @media (min-width: 768px) {
    padding-top: 20vh;
  }

  @media (min-width: 321px) {
    margin-top: 10vh;
  }
`;

export const SearchInput = styled(Input.Search)`
  .ant-input {
    border-radius: 999px;
    border: 1px solid #5f93a9;
  }
`;
