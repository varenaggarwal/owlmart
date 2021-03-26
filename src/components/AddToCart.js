import { useCartData } from "../contexts/dataContext";
import {
  ADD_TO_CART,
  INC_CART_QUANTITY,
  DEC_CART_QUANTITY
} from "../reducer/reducer";

export function AddToCart({ product }) {
  const { dispatch } = useCartData();

  const addToCartHandler = (id) => dispatch({ type: ADD_TO_CART, payload: id });

  const incrementQty = (id) =>
    dispatch({ type: INC_CART_QUANTITY, payload: id });

  const decrementQty = (id) =>
    dispatch({ type: DEC_CART_QUANTITY, payload: id });

  return (
    <>
      {product.cartQty > 0 ? (
        <div>
          <button
            className="btn-secondary"
            onClick={() => incrementQty(product.id)}
          >
            +
          </button>
          {product.cartQty}
          <button
            className="btn-secondary"
            onClick={() => decrementQty(product.id)}
          >
            -
          </button>
        </div>
      ) : (
        <button
          className="btn-secondary"
          onClick={() => addToCartHandler(product.id)}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
