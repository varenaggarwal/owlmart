export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const ROUTE = "ROUTE";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: true }
            : product
        )
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: false }
            : product
        )
      };

    case ROUTE:
      return { ...state, route: action.payload };

    case INITIAL_LOAD:
      return { ...state, productData: action.payload };

    default:
      return state;
  }
};
