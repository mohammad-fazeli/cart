import { Types } from "../actions/actionsTypes";

const initState = {
  products: [],
  fetching: false,
  error: null,
};

const ProductReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      return {
        ...state,
        fetching: true,
      };

    case Types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        products: action.data,
      };
    case Types.FETCH_PRODUCTS_FAILED:
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
