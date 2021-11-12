import { Types } from "../actions/actionsTypes";

const initState = {
  cart: [],
  cartProducts: [],
  fetching: false,
  error: null,
};

//return a new array of Objects That value count Related to the id, one is added هid id is undefined  Creates it with a count of 1
const add = (id, array) => {
  if (array.find((a) => a.id === id)) {
    const result = array.map((a) => {
      if (a.id === id) {
        return { id: id, count: a.count + 1 };
      }
      return a;
    });
    return result;
  } else {
    return [...array, { id: id, count: 1 }];
  }
};

//return a new array of objects that The corresponding id is reduced and deleted if it is zero
const remove = (id, array) => {
  const newc = array.map((r) => {
    if (id === r.id) {
      return { ...r, count: r.count - 1 };
    }
    return r;
  });
  return newc.filter((r) => r.count !== 0);
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.FETCH_CART_PRODUCTS:
      return {
        ...state,
        fetching: true,
      };
    case Types.FETCH_CART_PRODUCTS_SUCCESS:
      return { ...state, cartProducts: action.data };
    case Types.FETCH_CART_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case Types.CLEAR_CART_PRODUCTS:
      return {
        ...state,
        cart: [],
        cartProducts: [],
      };

    case Types.ADD_TO_CART:
      return { ...state, cart: add(action.id, state.cart) };

    case Types.REMOVE_AT_CART:
      return {
        ...state,
        cart: remove(action.id, state.cart),
      };
    default:
      return state;
  }
};
export default CartReducer;
