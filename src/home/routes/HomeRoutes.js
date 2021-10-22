import React from "react";
import { Route } from "react-router";
import HomeContainer from "../Homecontainer";

const HomeRoutes = () => {
  return <Route exact path="/" component={HomeContainer} />;
};

export default HomeRoutes;
