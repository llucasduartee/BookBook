import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

export const LoginIcon = styled(FiLogIn)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  } ;
`;

export const SignUpIcon = styled(MdCreate)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const Logo = styled.img`
  width: 90%;
  margin-left: -5%;
  margin-top: -16px;
  margin-bottom: -16px;

  @media (max-width: 1200px) {
    width: 200px;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 720px) {
    width: 150px;
  }
  @media (max-width: 540px) {
    display: none;
  }
`;

export const ClickLogo = styled.a``;

export const Anchor = styled.a`
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0;
    margin-left: 0;
  }

  @media (max-width: 720px) {
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;

export const MainDiv = styled.div`
  padding-left: 50px;
  @media (max-width: 1200px) {
    padding: 0;
    display: flex;
    justify-content: space-evenly;
  }
`;
