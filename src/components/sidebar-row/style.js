import styled from "styled-components";

export const ItemsRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: fit-content;

  cursor: pointer;
  &:hover {
    background-color: #5f93a9;
    border-radius: 10px;
    width: 80%;
  }

  @media (max-width: 720px) {
    padding: 10px;
  }
`;

export const Titles = styled.h3`
  margin-left: 20px;
  font-weight: 600;
  padding-top: 10px;
  color: white;

  @media (max-width: 1000px) {
    display: none;
  }
`;
