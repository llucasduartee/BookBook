import styled from "styled-components";
import { colorDarkest } from "../../helper/color-config";
import { motion } from "framer-motion";

export const GraphicDiv = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BookmarkIcon = styled.img`
  width: 284px;
  height: fit-content;
  margin-top: -3px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const BookmarkTrunk = styled.div`
  width: 100%;
  background-color: ${colorDarkest};
  border-bottom: 6px solid ${colorDarkest};

  @media (max-width: 1200px) {
    flex-flow: row;
  }
`;

export const BookmarkAside = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 4vw;
  width: 284px;
  height: fit-content;
  display: flex;
  flex-flow: column;
  z-index: 3;

  @media (max-width: 1200px) {
    flex-flow: row;
    width: 100vw;
    left: 0;
  }
`;
