import React, { useState, useEffect } from "react";
import CardShelves from "../../components/card-shelves";
import {
  removeBookAPI,
  moveBookAPI,
} from "../../redux/actions/change-books-BookBook-API";
import {
  changeEvaluateBook,
  removeOneBook,
  requestUserBooks,
} from "../../redux/actions/user-books-actions";
import { useSelector, useDispatch } from "react-redux";
import BookmarkAside from "../../components/bookmark";
import LogoutButton from "../../components/logout-button";
import { movedShelf } from "./helper";
import { Modal, Button, Form, Input, InputNumber } from "antd";
import Graphic from "../../components/graphics";
import { axiosConfig } from "../../helper/axios-config";
import { shelf } from "./helper";
import {
  GraphicDiv,
  Container,
  CardDiv,
  Title,
  TitleDiv,
  ButtonsDiv,
  MainDiv,
  ShelfSelect,
  ButtonText,
  Subtitle,
} from "./style";

const Shelves = () => {
  const [keyShelf, setKeyShelf] = useState("Todos");
  const [book, setBook] = useState({});
  const userBooks = useSelector((state) => state.userBooks);
  const user = useSelector((state) => state.session.user);
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(
      changeEvaluateBook(user.id, book.id, values, axiosConfig(token), handleOk)
    );
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (user.id !== undefined) {
      dispatch(requestUserBooks(user.id, axiosConfig(token)));
    }
  }, []);

  const showShelf = () => {
    switch (keyShelf) {
      case "Quero ler":
        return shelf(userBooks, 1);
      case "Lendo":
        return shelf(userBooks, 2);
      case "Lido":
        return shelf(userBooks, 3);
      default:
        return userBooks;
    }
  };

  return (
    <>
      <BookmarkAside />
      <LogoutButton />
      <>
        <Modal
          visible={visible}
          title="Avaliar livro"
          onOk={onFinish}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            ,
          ]}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Nota"
              name={["book", "grade"]}
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  min: 1,
                  max: 10,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              label="Resenha"
              name={["book", "review"]}
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={onFinish}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>

      <Container>
        <MainDiv>
          <TitleDiv>
            <Title>Bem vindo a sua Biblioteca Virtual!</Title>
          </TitleDiv>
          <GraphicDiv>
            <Graphic />
          </GraphicDiv>
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
        </MainDiv>
        <CardDiv>
          {showShelf().map((books, key) => (
            <>
              <CardShelves
                key={key}
                image={books.image_url}
                title={books.title}
                author={books.author}
                review={books.review}
                grade={books.grade}
                book={books}
                keyShelf={keyShelf}
                onClickDeleteBook={() => {
                  dispatch(
                    removeBookAPI(user.id, books.id, axiosConfig(token))
                  );
                  dispatch(removeOneBook(books));
                }}
                onClickMoveShelf1={() => {
                  dispatch(
                    moveBookAPI(user.id, books.id, 1, axiosConfig(token))
                  );
                  movedShelf(dispatch, books, 1);
                }}
                onClickMoveShelf2={() => {
                  dispatch(
                    moveBookAPI(user.id, books.id, 2, axiosConfig(token))
                  );
                  movedShelf(dispatch, books, 2);
                }}
                onClickMoveShelf3={() => {
                  dispatch(
                    moveBookAPI(user.id, books.id, 3, axiosConfig(token))
                  );
                  movedShelf(dispatch, books, 3);
                }}
                onClickEvaluateBook={() => {
                  setBook(books);
                  showModal();
                }}
              />
            </>
          ))}
        </CardDiv>
      </Container>
    </>
  );
};

export default Shelves;
