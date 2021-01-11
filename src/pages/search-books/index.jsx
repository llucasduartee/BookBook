import React, { useState, useEffect } from "react";
import { requestBooksAPI } from "../../redux/actions/search-books-google-API-actions";
import { requestUserBooks } from "../../redux/actions/user-books-actions";
import { useSelector, useDispatch } from "react-redux";
import CardBooks from "../../components/card-books";
import { selectedShelf } from "./helper";
import BookmarkAside from "../../components/bookmark";
import LogoutButton from "../../components/logout-button";
import { axiosConfig } from "../../helper/axios-config";
import {
  Container,
  SearchDiv,
  Title,
  FormDiv,
  CardDiv,
  SearchInput,
} from "./style";

const SearchBooks = () => {
  const token = useSelector((state) => state.session.token);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const APIbooks = useSelector((state) => state.searchBooksGoogleAPI);
  const userBooks = useSelector((state) => state.userBooks);

  const handleSubmit = () => {
    dispatch(requestBooksAPI(value.split(" ").join("+")));
  };

  useEffect(() => {
    if (user.id !== undefined) {
      dispatch(requestUserBooks(user.id, axiosConfig(token)));
    }
  }, []);

  return (
    <>
      <BookmarkAside />
      <LogoutButton />
      <Container>
        <SearchDiv>
          <FormDiv>
            <Title>Bem vindo a sua Biblioteca Virtual!</Title>

            <SearchInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Escreva o nome do livro que deseja encontrar"
              onSearch={handleSubmit}
              enterButton
            />
          </FormDiv>
        </SearchDiv>
        <CardDiv>
          {APIbooks.map((book, key) => (
            <>
              <CardBooks
                userBooks={userBooks}
                book={book}
                key={key}
                onClickShelf1={() =>
                  selectedShelf(dispatch, user, axiosConfig(token), book, 1)
                }
                onClickShelf2={() =>
                  selectedShelf(dispatch, user, axiosConfig(token), book, 2)
                }
                onClickShelf3={() =>
                  selectedShelf(dispatch, user, axiosConfig(token), book, 3)
                }
              />
            </>
          ))}
        </CardDiv>
      </Container>
    </>
  );
};

export default SearchBooks;
