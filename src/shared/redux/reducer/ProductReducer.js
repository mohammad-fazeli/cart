import { Types } from "../actions/actionsTypes";

const initState = {
  products: [],
  product: {},
  cart: [],
  cartProducts: [],
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
      localStorage.setItem("cart", JSON.stringify([]));

      return {
        ...state,
        cart: [],
        cartProducts: [],
      };

    case Types.LOADE_CART_PRODUCTS:
      if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", "[]");
      } else {
        return { ...state, cart: JSON.parse(localStorage.getItem("cart")) };
      }
      return state;
    case Types.ADD_TO_CART:
      const equ = (id, array) => {
        const r = array.filter((a) => a.id === id);
        if (r.length === 0) {
          return false;
        }
        return true;
      };
      if (equ(action.id, state.cart)) {
        const newCart = state.cart.map((a) => {
          if (a.id === action.id) {
            return { ...a, count: a.count + 1 };
          }
          return a;
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { ...state, cart: newCart };
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, { id: action.id, count: 1 }])
        );
        return { ...state, cart: [...state.cart, { id: action.id, count: 1 }] };
      }
    case Types.REMOVE_AT_CART:
      const remove = (id, array) => {
        const newc = array.map((r) => {
          if (id === r.id) {
            return { ...r, count: r.count - 1 };
          }
          return r;
        });
        return newc.filter((r) => r.count !== 0);
      };
      localStorage.setItem(
        "cart",
        JSON.stringify(remove(action.id, state.cart))
      );

      return {
        ...state,
        cart: remove(action.id, state.cart),
      };
    default:
      return state;
  }
};
export default ProductReducer;
