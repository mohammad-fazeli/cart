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
