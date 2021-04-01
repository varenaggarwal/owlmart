import { useCartData } from "../contexts/data-context";
import { REMOVE_FROM_CART } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";
import { Checkout } from "./Checkout";

export function Cart() {
  const { state, dispatch } = useCartData();

  const removeHandler = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });

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
                onClick={() => removeHandler(product.id)}
                className="cross"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
