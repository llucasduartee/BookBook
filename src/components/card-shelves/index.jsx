import React, { useState } from "react";
import { Button } from "antd";
import { BookOutlined } from "@ant-design/icons";
import {
  ButtonDiv,
  NewCard,
  Separator,
  BookTitle,
  BookDescription,
} from "./style";

const CardShelves = ({
  image,
  title,
  author,
  keyShelf,
  review,
  grade,
  onClickDeleteBook,
  onClickMoveShelf1,
  onClickMoveShelf2,
  onClickMoveShelf3,
  onClickEvaluateBook,
}) => {
  const [showButton, setShowButton] = useState(true);
  return (
    <NewCard hoverable cover={<img alt={title} src={image} />}>
      <BookTitle>
        <strong>Título:</strong> {title}
      </BookTitle>
      <BookDescription>
        <strong>Autor:</strong> {author}
      </BookDescription>
      <BookDescription>
        <strong>Resenha:</strong> {review}
      </BookDescription>
      <BookDescription>
        <strong>Nota:</strong> {grade}
      </BookDescription>
      {keyShelf === "Todos" ? (
        ""
      ) : (
        <>
          <ButtonDiv>
            <Button
              type="primary"
              size="small"
              icon={<BookOutlined />}
              onClick={() => setShowButton(!showButton)}
            >
              Opções
            </Button>
            <Separator />
          </ButtonDiv>
          {showButton ? (
            ""
          ) : (
            <ButtonDiv>
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickMoveShelf1}
              >
                Mudar para Quero Ler
              </Button>
              <Separator />
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickMoveShelf2}
              >
                Mudar para Lendo
              </Button>
              <Separator />
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickMoveShelf3}
              >
                Mudar para Lido
              </Button>
              <Separator />
              <Button
                type="primary"
                size="small"
                icon={<BookOutlined />}
                onClick={onClickDeleteBook}
              >
                Deletar livro
              </Button>
              <Separator />
              {keyShelf === "Lido" && (
                <Button
                  type="primary"
                  size="small"
                  icon={<BookOutlined />}
                  onClick={onClickEvaluateBook}
                >
                  Avaliar Livro
                </Button>
              )}
            </ButtonDiv>
          )}
        </>
      )}
    </NewCard>
  );
};

export default CardShelves;
