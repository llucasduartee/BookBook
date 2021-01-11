import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 1;
  }

  &:active {
    transition: 0.2s;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }

  opacity: 0;
  z-index: 2;
  &:hover {
    transition: 0.3s;
    background-color: white;
    opacity: 1;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Icon = styled.img``;

export const Watermark = styled.img`
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  &:hover {
    transition: 0.3s;
    opacity: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
