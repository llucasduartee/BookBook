import styled from "styled-components";
import { translucidBlueLucas } from "../../helper/color-config";
import { Form } from "antd";

export const Anchors = styled.div`
  bottom: 16px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column;
  border-radius: 8px;
  padding: 30px;
  width: fit-content;
  background-color: rgba(223, 227, 238, 0.3);
  color: white;

  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`;
