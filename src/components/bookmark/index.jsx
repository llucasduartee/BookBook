import React from "react";
import bookmarkIcon from "../../images/bookmark-icon-this.png";
import Sidebar from "../sidebar";
import VisitorSidebar from "../sidebar-visitor";
import Graphic from "../graphics";
import { useLocation } from "react-router-dom";
import {
  GraphicDiv,
  BookmarkIcon,
  BookmarkTrunk,
  BookmarkAside,
} from "./style";

const Bookmark = () => {
  const { pathname } = useLocation();

  return (
    <BookmarkAside
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <BookmarkTrunk>
        {pathname === "/visitor-page" && <VisitorSidebar />}
        {pathname !== "/visitor-page" && <Sidebar />}
        <GraphicDiv>
          {(pathname === "/shelves" || pathname === "/profile") && <Graphic />}
        </GraphicDiv>
      </BookmarkTrunk>
      <BookmarkIcon src={bookmarkIcon} />
    </BookmarkAside>
  );
};

export default Bookmark;
