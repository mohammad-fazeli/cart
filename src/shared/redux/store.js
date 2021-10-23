import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "./middleware";
import ProductReducer from "./reducer/ProductReducer";

const store = createStore(ProductReducer, applyMiddleware(apiMiddleware));

export default store;
