import { Cart } from "./components/Cart";
import { ProductListing } from "./components/ProductListing";
import { Wishlist } from "./components/Wishlist";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { useCartData } from "./contexts/data-context";
import { useProductLoader } from "./hooks/useProductLoader";
import "./styles.css";
import { Route, Routes } from "react-router";
import { PrivateRoute } from "./components/PrivateRoute";
import { Homepage } from "./components/";

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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductListing />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <PrivateRoute path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
