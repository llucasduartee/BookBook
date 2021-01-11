import styled from "styled-components";

export const FeedDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TimelineTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 44px;
  color: #5f93a9;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 10vw;
    font-size: 40px;
    text-align: center;
    margin-bottom: -160px;
  }

  @media (max-width: 540px) {
    width: fit-content;
    margin-left: 0;
    font-size: 32px;
  }

  @media (max-width: 350px) {
    font-size: 24px;
  }

  @media (max-width: 280px) {
    font-size: 18px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  margin-left: 26%;
  padding: 10px;

  @media (max-width: 1200px) {
    margin-top: 160px;
    margin-left: 0;
  }

  @media (max-width: 540px) {
    margin-top: 100px;
  }

  @media (max-width: 280px) {
    width: 80%;
  }
`;
