import { useCartData } from "../contexts/dataContext";
import { ROUTE } from "../reducer/reducer";

export function Navbar() {
  const { dispatch } = useCartData();
  return (
    <nav className="nav-bar">
      <h1>Product Central</h1>
      <button
        className="btn"
        onClick={() => dispatch({ type: ROUTE, payload: "productListing" })}
      >
        Product Listing
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: ROUTE, payload: "wishlist" })}
      >
        Wishlist
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: ROUTE, payload: "cart" })}
      >
        Cart
      </button>
    </nav>
  );
}
