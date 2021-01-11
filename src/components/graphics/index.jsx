import React, { useState, useEffect } from "react";
import {
  colorLighter,
  colorRedDarker,
  colorYellowDarker,
  colorBlueDarker,
  colorRedLight,
  colorYellowLight,
  colorBlueLight,
} from "../../helper/color-config";
import { useSelector } from "react-redux";
import { StyledPie, Container, Title, Button } from "./style";

const Graphics = () => {
  const [showGraphic, setShowGraphic] = useState(true);
  const [shelvesValues, setShelvesValues] = useState({
    want: 0,
    reading: 0,
    read: 0,
  });
  const userBooks = useSelector((state) => state.userBooks);

  useEffect(() => {
    const auxObject = { want: 0, reading: 0, read: 0 };
    userBooks.forEach((book) => {
      switch (book.shelf) {
        case 1:
          auxObject.want += 1;
          break;
        case 2:
          auxObject.reading += 1;
          break;
        case 3:
          auxObject.read += 1;
          break;
        default:
          break;
      }
    });

    setShelvesValues(auxObject);
  }, [userBooks]);

  const data = {
    labels: ["Quero Ler", "Lendo", "Lido"],
    datasets: [
      {
        data: Object.values(shelvesValues),
        backgroundColor: [colorRedDarker, colorYellowDarker, colorBlueDarker],
        hoverBackgroundColor: [colorRedLight, colorYellowLight, colorBlueLight],
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: colorLighter,
        fontSize: 18,
      },
    },
  };

  return (
    <Container>
      <Button onClick={() => setShowGraphic(!showGraphic)}>
        <Title>- Sua Leitura -</Title>
      </Button>
      {showGraphic && <StyledPie data={data} options={options} aspect />}
    </Container>
  );
};

export default Graphics;
