import React from "react";
import { ItemsRow, Titles } from "./style";

const SideBarRow = ({ src, Icon, title }) => {
  return (
    <>
      <ItemsRow>
        {Icon && <Icon />}
        <Titles>{title}</Titles>
      </ItemsRow>
    </>
  );
};

export default SideBarRow;
