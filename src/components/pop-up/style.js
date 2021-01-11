import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  transform: "translate(-50%, -50%)";
  padding: 100px;
  z-index: 1000;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  width: 600px;
  margin-left: 500px;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 80vw;
    margin-left: 5vw;
  }

  @media (max-width: 520px) {
    padding: 5vw;
    font-size: 14px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
`;
