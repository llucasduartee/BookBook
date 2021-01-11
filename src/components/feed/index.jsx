import React, { useEffect } from "react";
import Post from "../post";
import { useDispatch, useSelector } from "react-redux";
import { requestBookReviewsApi } from "../../redux/actions/add-book-reviews-actions";
import Cover from "../../assets/cover.jpg";
import { Link } from "react-router-dom";
import { axiosConfig } from "../../helper/axios-config";
import { MainDiv } from "./style";

const Feed = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const bookReviewsAPI = useSelector((state) => state.addBookReviews);

  useEffect(() => {
    dispatch(requestBookReviewsApi(axiosConfig(token)));
  }, []);

  return (
    <>
      <MainDiv>
        {bookReviewsAPI.map((book) => {
          let thumbnail = "";
          if (book.image_url) {
            thumbnail = book.image_url;
          } else {
            thumbnail = Cover;
          }

          const id = book.creator.id;
          if (book.review) {
            return (
              <>
                <Post
                  username={
                    book.creator.name ? (
                      <Link to={`/friends-page/${id}`}>
                        {book.creator.name}
                      </Link>
                    ) : (
                      <Link to={`/friends-page/${id}`}>Desconhecido</Link>
                    )
                  }
                  title={book.title}
                  review={book.review}
                  src={book.image_url}
                />
              </>
            );
          }
        })}
      </MainDiv>
    </>
  );
};

export default Feed;
