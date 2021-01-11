import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    margin-top: 180px;
  }

  @media (max-width: 540px) {
    margin-top: 130px;
  }
`;
