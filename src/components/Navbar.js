import { useCartData } from "../contexts/data-context";
import { ROUTE } from "../reducer/reducer";

export function Navbar() {
  const { state, dispatch } = useCartData();

  const ItemsInWishlist = (acc, current) =>
    current.wishlist ? acc + 1 : acc + 0;

  const ItemsInCart = (acc, current) =>
    current.cartQty > 0 ? acc + 1 : acc + 0;

  return (
    <nav className="nav-bar nav-bar-shadow">
      <button
        className="btn btn-thin"
        onClick={() => dispatch({ type: ROUTE, payload: "productListing" })}
      >
        <h1>Product Central</h1>
      </button>

      <div>
        <button
          className="btn btn-thin btn-font-size-x-large"
          onClick={() => dispatch({ type: ROUTE, payload: "wishlist" })}
        >
          <i className="fas fa-heart"></i>
          <span
            className={
              state.productData.reduce(ItemsInWishlist, 0) > 0
                ? "badge"
                : "badge visibility-hidden"
            }
          >
            {state.productData.reduce(ItemsInWishlist, 0)}
          </span>
        </button>
        <button
          className="btn btn-thin btn-font-size-x-large"
          onClick={() => dispatch({ type: ROUTE, payload: "cart" })}
        >
          <i className="fas fa-cart-plus"></i>
          <span
            className={
              state.productData.reduce(ItemsInCart, 0) > 0
                ? "badge"
                : "badge visibility-hidden"
            }
          >
            {state.productData.reduce(ItemsInCart, 0)}
          </span>
        </button>
      </div>
    </nav>
  );
}
