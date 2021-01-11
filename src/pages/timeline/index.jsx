import React from "react";
import BookmarkAside from "../../components/bookmark";
import LogoutButton from "../../components/logout-button";
import Feed from "../../components/feed";
import { FeedDiv, TimelineTitle, TitleDiv } from "./style";

const Timeline = () => {
  return (
    <>
      <BookmarkAside />
      <LogoutButton />
      <TitleDiv>
        <TimelineTitle>Veja o que os outros leitores estão lendo</TimelineTitle>
      </TitleDiv>
      <FeedDiv>
        <Feed />
      </FeedDiv>
    </>
  );
};

export default Timeline;
