import { Types } from "./actionsTypes";

export const fetchProducts = () => {
  return {
    type: Types.FETCH_PRODUCTS,
    successType: Types.FETCH_PRODUCTS_SUCCESS,
    failedType: Types.FETCH_PRODUCTS_FAILED,
    isEndpointCall: true,
    endpoint: "products/",
    method: "GET",
  };
};
export const fetchProduct = (id) => {
  return {
    type: Types.FETCH_PRODUCT,
    successType: Types.FETCH_PRODUCT_SUCCESS,
    failedType: Types.FETCH_PRODUCT_FAILED,
    isEndpointCall: true,
    endpoint: `products/${id}`,
    method: "GET",
  };
};

export const fetchCartProducts = (ids = "") => {
  return {
    type: Types.FETCH_CART_PRODUCTS,
    successType: Types.FETCH_CART_PRODUCTS_SUCCESS,
    failedType: Types.FETCH_CART_PRODUCTS_FAILED,
    isEndpointCall: true,
    endpoint: `products/${ids}`,
    method: "GET",
  };
};

export const clearCartProducts = () => {
  return {
    type: Types.CLEAR_CART_PRODUCTS,
  };
};

export const loadeCart = () => {
  return {
    type: Types.LOADE_CART_PRODUCTS,
  };
};

export const addCart = (id) => {
  return {
    type: Types.ADD_TO_CART,
    isEndpointCall: false,
    id,
  };
};
export const removeCart = (id) => {
  return {
    type: Types.REMOVE_AT_CART,
    isEndpointCall: false,
    id,
  };
};
