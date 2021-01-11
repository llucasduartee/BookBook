import React, { useState } from "react";
import { Button } from "antd";
import { BookOutlined } from "@ant-design/icons";
import Cover from "../../assets/cover.jpg";
import {
  ButtonDiv,
  BookTitle,
  BookDescription,
  NewCard,
  Separator,
} from "./style";

const CardBooks = ({
  book,
  userBooks,
  onClickShelf1,
  onClickShelf2,
  onClickShelf3,
}) => {
  const [showButton, setShowButton] = useState(false);
  const bookShelf = userBooks
    .filter((userBook) => userBook.google_book_id === book.id)
    .map((book) => book.shelf);

  const nameShelf = () => {
    if (bookShelf == 1) {
      return "Quero ler";
    }
    if (bookShelf == 2) {
      return "Lendo";
    }
    if (bookShelf == 3) {
      return "Lido";
    }
  };

  return (
    <NewCard
      hoverable
      cover={
        <img
          alt={book.volumeInfo.title}
          src={
            book.volumeInfo.imageLinks === undefined
              ? Cover
              : book.volumeInfo.imageLinks.smallThumbnail
          }
        />
      }
    >
      <BookTitle>
        <strong>Título:</strong> {book.volumeInfo.title}
      </BookTitle>
      <BookDescription>
        <strong>Autor:</strong> {book.volumeInfo.authors}
      </BookDescription>
      {userBooks.some((userBook) => userBook.google_book_id === book.id) ? (
        <BookDescription>
          Este livro foi adicionado à sua prateleira {nameShelf()}
        </BookDescription>
      ) : (
        <>
          <ButtonDiv>
            <Button
              type="primary"
              size="small"
              icon={<BookOutlined />}
              onClick={() => setShowButton(!showButton)}
            >
              Adicionar à prateleira
            </Button>
            <Separator />
          </ButtonDiv>
          {showButton ? (
            <ButtonDiv>
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickShelf1}
              >
                Quero ler
              </Button>
              <Separator />
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickShelf2}
              >
                Lendo
              </Button>
              <Separator />
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickShelf3}
              >
                Lido
              </Button>
            </ButtonDiv>
          ) : (
            ""
          )}
        </>
      )}
    </NewCard>
  );
};

export default CardBooks;
