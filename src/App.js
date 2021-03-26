import { Cart } from "./components/Cart";
import ProductListing from "./components/ProductListing";
import { Wishlist } from "./components/Wishlist";
import { useCartData } from "./contexts/dataContext";
import { useProductLoader } from "./hooks/useProductLoader";
import "./styles.css";

export default function App() {
  const response = useProductLoader();
  const { state } = useCartData();

  return (
    <div className="App">
      {state.route === "productListing" && <ProductListing />}
      {state.route === "wishlist" && <Wishlist />}
      {state.route === "cart" && <Cart />}
    </div>
  );
}
