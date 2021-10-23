import React from "react";
import { Route } from "react-router";
import ProductContainer from "../ProductContainer";

const ProductRoutes = () => {
  return <Route exact path="/Product/:id" component={ProductContainer} />;
};

export default ProductRoutes;
