import { createStore, applyMiddleware } from "redux";
import apiMiddleware from "./middleware";
import ProductReducer from "./reducer/ProductReducer";
import { loadeCart } from "./actions/productAction";

const store = createStore(ProductReducer, applyMiddleware(apiMiddleware));
store.dispatch(loadeCart());

export default store;
