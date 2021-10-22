import React from "react";
import { Route } from "react-router";
import CartContainer from "../CartContainer";

const CartRoutes = () => {
  return <Route path="/cart" component={CartContainer} />;
};

export default CartRoutes;
