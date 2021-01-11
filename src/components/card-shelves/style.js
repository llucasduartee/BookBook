import styled from "styled-components";
import { Card } from "antd";

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewCard = styled(Card)`
  border-radius: 15px;
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  background-color: #dfe3ee;
  width: 300px;
`;

export const Separator = styled.div`
  padding: 8px;
`;

export const BookTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
`;
export const BookDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;
