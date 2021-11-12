import { Types } from "../actions/actionsTypes";

const initState = {
  product: {},
  fetching: false,
  error: null,
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      return {
        ...state,
        fetching: true,
      };

    case Types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        fetching: false,
        product: action.data,
      };
    case Types.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default ProductReducer;
