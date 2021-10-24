import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCartProducts,
  clearCartProducts,
} from "../shared/redux/actions/productAction";
import Checkout from "./components/Checkout";
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
      if (cartProducts.length !== 0) {
        clearCartProducts();
      }
    }
  }, [fetchCartProducts, cart, clearCartProducts, cartProducts.length]);

  return (
    <CartContainerStyle>
      <ProductsList cart={cart} products={cartProducts} />
      {cart.length !== 0 ? (
        <Checkout
          clearCartProducts={clearCartProducts}
          products={cartProducts}
          cart={cart}
        />
      ) : (
        ""
      )}
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
