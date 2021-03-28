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
      <Checkout />
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
            <button onClick={() => removeHandler(product.id)} className="cross">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ) : null
      )}
    </>
  );
}
