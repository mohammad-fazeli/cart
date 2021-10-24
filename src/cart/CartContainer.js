import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCartProducts,
  clearCartProducts,
} from "../shared/redux/actions/productAction";
import Form from "./components/Form";
import ProductsList from "./components/ProductsList";
import { CartContainerStyle } from "./components/styled.components";

const CartContainer = ({
  cart,
  fetchCartProducts,
  cartProducts,
  clearCartProducts,
}) => {
  const createIds = (cart) => {
    const ids = cart.map((a) => {
      return `id=${a.id}`;
    });
    return "?" + ids.join("&");
  };
  useEffect(() => {
    const QueryParameters = createIds(cart);
    if (QueryParameters !== "?") {
      fetchCartProducts(QueryParameters);
    } else {
      clearCartProducts();
    }
  }, [fetchCartProducts, cart, clearCartProducts]);

  return (
    <CartContainerStyle>
      <ProductsList cart={cart} products={cartProducts} />
      {cart.length !== 0 ? <Form products={cartProducts} cart={cart} /> : ""}
    </CartContainerStyle>
  );
};

const mapStateToProps = ({ cart, cartProducts }) => {
  return { cart, cartProducts };
};

const mapDispatchToProps = {
  fetchCartProducts,
  clearCartProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
