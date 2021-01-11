import React from "react";
import SideBarRow from "../sidebar-row";
import LogoImg from "../../assets/booklogo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/session-actions";
import {
  ClickLogo,
  Logo,
  HomeIcon,
  BookIcon,
  ShelfIcon,
  ProfileIcon,
  logoutIcon,
  MainDiv,
  Anchor,
  AnchorLogout,
} from "./style";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <MainDiv>
        <ClickLogo>
          <Logo src={LogoImg} alt="Bookbook Logo" />
        </ClickLogo>
        <Anchor href="/timeline">
          <SideBarRow Icon={HomeIcon} title="Inicio" />
        </Anchor>
        <Anchor href="/search-books">
          <SideBarRow Icon={BookIcon} title="Pesquisar" />
        </Anchor>
        <Anchor href="/shelves">
          <SideBarRow Icon={ShelfIcon} title="Estantes" />
        </Anchor>
        <Anchor href="/profile">
          <SideBarRow Icon={ProfileIcon} title="Perfil" />
        </Anchor>
        <AnchorLogout onClick={() => dispatch(logout())}>
          <SideBarRow Icon={logoutIcon} title="Logout" />
        </AnchorLogout>
      </MainDiv>
    </>
  );
};

export default Sidebar;
