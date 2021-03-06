import { createContext, useReducer, useContext } from "react";
import { reducer } from "../reducer/reducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    productData: [],
    cart: [],
    wishlist: [],
    listingSettings: {
      showInventoryAll: true,
      showFastDeliveryOnly: false,
      sortBy: null,
    },
  });
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export function useCartData() {
  return useContext(DataContext);
}
