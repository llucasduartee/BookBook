import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

export const HeaderRight = styled.div``;
export const Logo = styled.img`
  height: 60px;
  width: 100px;
`;

export const MainHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0 0.75);
  border-bottom: 1px solid #e0e0e0;
`;
export const HeaderMid = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
`;
export const HeaderLeft = styled.div`
  margin-left: 30px;
`;

export const HomeIcon = styled(HiHome)`
  height: 40px;
  width: 40px;
  color: gray;
  & :hover {
    color: #2e81f4;
  }
`;
export const BookIcon = styled(FaBook)`
  height: 35px;
  width: 35px;
  color: gray;
  & :hover {
    color: #2e81f4;
  }
`;
export const ShelfIcon = styled(GiBookshelf)`
  height: 40px;
  width: 40px;
  color: gray;
  & :hover {
    color: #2e81f4;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eff2f5;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;
  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
  }
`;

export const ProfileIcon = styled(BsFillPersonFill)`
  height: 40px;
  width: 40px;
  color: gray;
  & :hover {
    color: #2e81f4;
  }
`;
