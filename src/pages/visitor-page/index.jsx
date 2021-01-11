import React from "react";
import SearchBar from "../../components/search-bar";
import BookmarkAside from "../../components/bookmark";
import { MainDiv } from "./style";

const VisitorPage = () => {
  return (
    <div>
      <MainDiv>
        <BookmarkAside />
        <SearchBar />
      </MainDiv>
    </div>
  );
};

export default VisitorPage;
