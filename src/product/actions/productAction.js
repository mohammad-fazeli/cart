import { Types } from "./actionsTypes";

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
