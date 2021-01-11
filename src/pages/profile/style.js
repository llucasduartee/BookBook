import styled from "styled-components";
import { StyledForm } from "../../components/form-login/style";
import { Input } from "antd";
import { blueLucas } from "../../helper/color-config.js";

export const GraphicDiv = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 160px;
  }

  @media (max-width: 540px) {
    margin-left: 0;
    margin-top: 100px;
  }
`;

export const BackToLogin = styled.span`
  display: flex;
  justify-content: center;
`;

export const Anchor = styled.a`
  font-size: 16px;
  margin: auto;
`;

export const ScreenAdjuster = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  @media (max-width: 1200px) {
    display: block;
    margin-left: 0;
  }
`;

export const NewStyledForm = styled(StyledForm)`
  position: initial;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  background-color: rgba(223, 227, 238, 0.3);
  width: 50vw;
  margin-left: 18vw;

  @media (max-width: 1200px) {
    width: 70vw;
    margin-left: 15vw;
  }

  @media (max-width: 540px) {
    width: 70vw;
    margin-left: 12vw;
  }
`;

export const NewInput = styled(Input)`
  border-radius: 10px;
  width: 100%;
`;

export const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const MainDiv = styled.div`
  padding-top: 45px;
  display: flex;
`;
