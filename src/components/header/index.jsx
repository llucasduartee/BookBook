import React from "react";
import LogoImg from "../../assets/booklogo.png";
import { Typography } from "antd";
import {
  HeaderRight,
  Logo,
  MainHeader,
  HeaderMid,
  HeaderLeft,
  HomeIcon,
  BookIcon,
  ShelfIcon,
  InputDiv,
  ProfileIcon,
} from "./style";

const Header = () => {
  return (
    <>
      <MainHeader>
        <HeaderLeft>
          <a href="/timeline">
            <Logo src={LogoImg} alt="Bookbook Logo" />
          </a>
        </HeaderLeft>

        <HeaderMid>
          <a href="/">
            <HomeIcon />
          </a>
          <a href="/search-books">
            <BookIcon />
          </a>
          <a href="/shelves">
            <ShelfIcon />
          </a>
          <a href="/">
            <ProfileIcon />
          </a>
        </HeaderMid>
        <HeaderRight>
          <Typography level={2}>Lucas Duarte</Typography>
        </HeaderRight>
      </MainHeader>
    </>
  );
};

export default Header;
