import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartRoutes from "../../cart/routes/CartRoutes";
import Header from "../../components/Header";
import HomeRoutes from "../../home/routes/HomeRoutes";
import ProductRoutes from "../../product/routes/ProductRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <HomeRoutes />
      <CartRoutes />
      <ProductRoutes />
    </Router>
  );
};

export default AppRoutes;
