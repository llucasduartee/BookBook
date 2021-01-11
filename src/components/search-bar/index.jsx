import React, { useState } from "react";
import { BookOutlined } from "@ant-design/icons";
import Cover from "../../assets/cover.jpg";
import PopUp from "../pop-up";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  TitleDiv,
  NewCard,
  CardImg,
  BookTitle,
  BookDescription,
  Container,
  SearchDiv,
  FormDiv,
  Title,
  SearchInput,
  CardDiv,
  ButtonDiv,
} from "./style";
import { Button } from "antd";
import axios from "axios";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [, setDiv] = useState(false);
  let string = search.split(" ").join("+");

  const handleSubmit = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${string}&maxResults=40`
      )
      .then((data) => {
        if (data.data.items.length > 0) {
          setCards(data.data.items);
          setDiv(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <SearchDiv>
          <FormDiv>
            <TitleDiv>
              {pathname === "/visitor-page" && (
                <Title>Aqui nós procuramos nossos livros</Title>
              )}
              {pathname !== "/visitor-page" && (
                <Title>Bem vindo a sua Biblioteca Virtual!</Title>
              )}
            </TitleDiv>
            <SearchInput
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Escreva o nome do livro que deseja encontrar"
              onSearch={handleSubmit}
              enterButton
            />
          </FormDiv>
        </SearchDiv>
        <CardDiv>
          {cards.map((book) => {
            let thumbnail = "";
            if (book.volumeInfo.imageLinks) {
              thumbnail = book.volumeInfo.imageLinks.thumbnail;
            } else {
              thumbnail = Cover;
            }
            return (
              <>
                <NewCard
                  cover={
                    <CardImg alt={book.volumeInfo.title} src={thumbnail} />
                  }
                >
                  <BookTitle>{book.volumeInfo.title}</BookTitle>
                  <BookDescription>{book.volumeInfo.authors}</BookDescription>

                  <ButtonDiv>
                    <Button
                      type="primary"
                      size="small"
                      icon={<BookOutlined />}
                      onClick={createModal}
                    >
                      Adicionar à prateleira
                    </Button>
                  </ButtonDiv>
                </NewCard>
              </>
            );
          })}
        </CardDiv>
      </Container>
      {isOpen && <PopUp isOpen={isOpen} />}
    </>
  );
};

export default SearchBar;
