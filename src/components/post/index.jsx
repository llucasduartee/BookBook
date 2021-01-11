import React from "react";
import {
  PostDiv,
  UserName,
  PostTop,
  PostImage,
  PostTopInfo,
  PostImageDiv,
  BookTitle,
} from "./style";

const Post = ({ username, review, src, title }) => {
  return (
    <>
      <PostDiv>
        <PostTop>
          <PostTopInfo>
            <UserName>{username}</UserName>
            <BookTitle>
              <strong>Título:</strong> {title}
            </BookTitle>
            <BookTitle>
              <strong>Review:</strong> {review}
            </BookTitle>
          </PostTopInfo>
        </PostTop>
        <PostImageDiv>
          <PostImage src={src} />
        </PostImageDiv>
      </PostDiv>
    </>
  );
};

export default Post;
