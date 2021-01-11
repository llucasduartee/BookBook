import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const ClickLogo = styled.a``;

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

export const HomeIcon = styled(HiHome)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const BookIcon = styled(BsSearch)`
  height: 35px;
  width: 35px;
  color: white;

  @media (max-width: 280px) {
    height: 32px;
    width: 32px;
  }
`;

export const ShelfIcon = styled(GiBookshelf)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const ProfileIcon = styled(BsFillPersonFill)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
  }
`;

export const logoutIcon = styled(RiLogoutBoxRLine)`
  height: 40px;
  width: 40px;
  color: white;

  @media (max-width: 280px) {
    height: 35px;
    width: 35px;
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

export const Anchor = styled.a`
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;

export const AnchorLogout = styled.a`
  @media (max-width: 1200px) {
    margin-top: 40px;
    margin-right: 0;
  }

  @media (max-width: 720px) {
    margin-top: 14px;
    margin-bottom: 14px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
