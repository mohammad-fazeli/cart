import { Types } from "./actionsTypes";

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
