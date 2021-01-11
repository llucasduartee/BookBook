import React from "react";
import { Switch } from "react-router-dom";
import RoutersRestricted from "../routes/route/restricted-route";

const RestrictedArea = () => {
  return (
    <Switch>
      <RoutersRestricted />
    </Switch>
  );
};

export default RestrictedArea;
