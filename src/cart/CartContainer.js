import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchCartProducts,
  clearCartProducts,
} from "../shared/redux/actions/productAction";
import { Link } from "react-router-dom";
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
        <div>
          <h1>The cart is empty.</h1>
          <Link to="/">
            <h2>Go to the products page</h2>
          </Link>
        </div>
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
