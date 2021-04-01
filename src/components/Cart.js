import { useCartData } from "../contexts/data-context";
import {
  MOVE_TO_WISHLIST_FROM_CART,
  REMOVE_FROM_CART,
} from "../reducer/reducer";
import { AddToCart } from "./AddToCart";
import { Checkout } from "./Checkout";

export function Cart() {
  const { state, dispatch } = useCartData();

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <Checkout />
      <div className="cart-listing">
        {state.productData.map((product) =>
          product.cartQty > 0 ? (
            <div key={product.id} className="card card-shadow">
              <h3>{product.name}</h3>
              <p>
                <span>Price: </span>
                <span>₹</span>
                <span>{product.price}</span>
              </p>
              <AddToCart product={product} />
              <button
                onClick={() =>
                  dispatch({ type: REMOVE_FROM_CART, payload: id })
                }
                className="cross"
              >
                <i className="fas fa-trash"></i>
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: MOVE_TO_WISHLIST_FROM_CART,
                    payload: product.id,
                  })
                }
                className="btn btn-secondary"
              >
                Move to wishlist
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
