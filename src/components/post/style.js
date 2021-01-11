import styled from "styled-components";
import { blueLucas } from "../../helper/color-config";

export const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-top: 15px;
  border-radius: 15px;
  background-color: ${blueLucas};
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  flex: 0, 1, 150px;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 280px) {
    width: 60vw;
  }
`;
export const UserName = styled.h3`
  font-size: medium;
  font-weight: bold;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;
export const PostImage = styled.img`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 30vw;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 280px) {
    width: 60vw;
  }
`;
export const PostTopInfo = styled.div``;

export const PostImageDiv = styled.div`
  width: 100%;
`;

export const BookTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: small;
`;

export const TimeStamp = styled.p`
  font-size: small;
  color: gray;
`;
