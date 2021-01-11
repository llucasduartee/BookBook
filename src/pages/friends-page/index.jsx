import React, { useEffect, useState } from "react";
import BookmarkAside from "../../components/bookmark";
import { requestFriendBooks } from "../../redux/actions/friend-books-actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { shelf } from "./helper";
import LogoutButton from "../../components/logout-button";
import { axiosConfig } from "../../helper/axios-config";
import {
  Container,
  CardDiv,
  NewCard,
  BookTitle,
  BookDescription,
  CardImg,
  ShelfTitle,
  TitleDiv,
  ButtonsDiv,
  MainDiv,
  ShelfSelect,
  ButtonText,
  Subtitle,
} from "./style";

const FriendsPage = () => {
  const token = useSelector((state) => state.session.token);
  const friendBooks = useSelector((state) => state.friend.friend);
  const [keyShelf, setKeyShelf] = useState("Todos");
  const dispatch = useDispatch();
  const { id } = useParams();

  const showShelf = () => {
    switch (keyShelf) {
      case "Quero ler":
        return shelf(friendBooks, 1);
      case "Lendo":
        return shelf(friendBooks, 2);
      case "Lido":
        return shelf(friendBooks, 3);
      default:
        return friendBooks;
    }
  };

  useEffect(() => {
    dispatch(requestFriendBooks(id, axiosConfig(token)));
  }, []);

  const handleUser = () => {
    let name;
    friendBooks.map((user) => {
      name = user.creator.name;
    });
    return name;
  };

  return (
    <>
      <BookmarkAside />
      <LogoutButton />
      <Container>
        <MainDiv>
          <TitleDiv>
            <ShelfTitle>
              {" "}
              Leitor: {handleUser() ? handleUser() : "Desconhecido"}
            </ShelfTitle>
          </TitleDiv>
          <ButtonsDiv>
            <ShelfSelect onClick={() => setKeyShelf("Todos")}>
              <ButtonText>Todos</ButtonText>
            </ShelfSelect>
            <ShelfSelect onClick={() => setKeyShelf("Quero ler")}>
              <ButtonText>Quero ler</ButtonText>
            </ShelfSelect>
            <ShelfSelect onClick={() => setKeyShelf("Lendo")}>
              <ButtonText>Lendo</ButtonText>
            </ShelfSelect>
            <ShelfSelect onClick={() => setKeyShelf("Lido")}>
              <ButtonText>Lido</ButtonText>
            </ShelfSelect>
          </ButtonsDiv>
          <Subtitle>Você está na prateleira: {keyShelf}</Subtitle>
          <CardDiv>
            {showShelf().map((books, key) => (
              <NewCard
                key={key}
                hoverable
                cover={<CardImg alt={books.title} src={books.image_url} />}
              >
                <BookTitle>
                  <strong>Título: </strong> {books.title}
                </BookTitle>
                <BookDescription>
                  <strong>Autor: </strong>
                  {books.author}
                </BookDescription>
              </NewCard>
            ))}
          </CardDiv>
        </MainDiv>
      </Container>
    </>
  );
};

export default FriendsPage;
