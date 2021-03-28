export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const TOGGLE_FROM_WISHLIST = "TOGGLE_FROM_WISHLIST";
export const ROUTE = "ROUTE";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const INC_CART_QUANTITY = "INC_CART_QUANTITY";
export const DEC_CART_QUANTITY = "DEC_CART_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SORT = "SORT";
export const TOGGLE_INVENTORY = "TOGGLE_INVENTORY";
export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY";

export const reducer = (state, action) => {
  switch (action.type) {
    
    case TOGGLE_INVENTORY:
      return {
        ...state,
        listingSettings: {
          ...state.listingSettings,
          showInventoryAll: !state.listingSettings.showInventoryAll,
        },
      };

    case TOGGLE_DELIVERY:
      return {
        ...state,
        listingSettings: {
          ...state.listingSettings,
          showFastDeliveryOnly: !state.listingSettings.showFastDeliveryOnly,
        },
      };

    case TOGGLE_FROM_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: !product.wishlist }
            : product
        ),
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: true }
            : product
        ),
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, wishlist: false }
            : product
        ),
      };

    case ADD_TO_CART:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload ? { ...product, cartQty: 1 } : product
        ),
      };

    case INC_CART_QUANTITY:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, cartQty: product.cartQty + 1 }
            : product
        ),
      };

    case DEC_CART_QUANTITY:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload
            ? { ...product, cartQty: product.cartQty - 1 }
            : product
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload ? { ...product, cartQty: 0 } : product
        ),
      };

    case SORT:
      return {
        ...state,
        listingSettings: { ...state.listingSettings, sortBy: action.payload },
      };

    case INITIAL_LOAD:
      return { ...state, productData: action.payload };

    case ROUTE:
      return { ...state, route: action.payload };

    default:
      return state;
  }
};
