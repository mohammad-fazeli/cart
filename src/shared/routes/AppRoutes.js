import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CartRoutes from "../../cart/routes/CartRoutes";
import HomeRoutes from "../../home/routes/HomeRoutes";
const AppRoutes = () => {
  return (
    <Router>
      <HomeRoutes />
      <CartRoutes />
    </Router>
  );
};

export default AppRoutes;
