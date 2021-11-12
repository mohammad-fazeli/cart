import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "./middleware";
import { combineReducers } from "redux";
import CartReducer from "../../cart/reducer/CartReducer";
import HomeReducer from "../../home/reducer/HomeReducer";
import ProductReducer from "../../product/reducer/ProductReducer";

const LoadCart = () => {
  const cart = localStorage.getItem("cart");
  return {
    Cart: {
      cart: JSON.parse(cart),
      cartProducts: [],
      error: null,
      fetching: false,
    },
  };
};

const store = createStore(
  combineReducers({
    Home: HomeReducer,
    Cart: CartReducer,
    Product: ProductReducer,
  }),
  LoadCart(),
  applyMiddleware(apiMiddleware)
);
store.subscribe((a) => {
  const { cart } = store.getState().Cart;
  localStorage.setItem("cart", JSON.stringify(cart));
});

export default store;
