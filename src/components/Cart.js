import { useCartData } from "../contexts/dataContext";
import { REMOVE_FROM_CART } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";
import { Checkout } from "./Checkout";

export function Cart() {
  const { state, dispatch } = useCartData();

  const removeHandler = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });

  return (
    <>
      <h1>Cart</h1>

      {state.productData.map((product) =>
        product.cartQty > 0 ? (
          <li key={product.id} className="listing">
            {product.name}
            <AddToCart product={product} />
            <button onClick={() => removeHandler(product.id)} className="btn">
              Remove
            </button>
          </li>
        ) : null
      )}
      <Checkout />
    </>
  );
}
