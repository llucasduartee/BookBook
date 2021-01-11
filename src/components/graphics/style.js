import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { colorMain, colorMetal } from "../../helper/color-config";

export const StyledPie = styled(Pie)`
  width: 200px;
  height: 200px;
`;

export const Container = styled.div`
  margin-top: 32px;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
  margin: 0;

  @media (max-width: 1200px) {
    color: ${colorMetal};
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
  padding: 16px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${colorMain};
  }

  @media (max-width: 1200px) {
    &:focus {
      background-color: white;
    }
  }
`;
