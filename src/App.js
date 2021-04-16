import { Cart } from "./components/Cart";
import { ProductListing } from "./components/ProductListing";
import { Wishlist } from "./components/Wishlist";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { useCartData } from "./contexts/data-context";
import { useProductLoader } from "./hooks/useProductLoader";
import "./styles.css";

export default function App() {
  const { isLoading } = useProductLoader();
  const { state } = useCartData();

  if (isLoading) {
    return (
      <div className="App">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      {state.route === "productListing" && <ProductListing />}
      {state.route === "wishlist" && <Wishlist />}
      {state.route === "cart" && <Cart />}
    </div>
  );
}
