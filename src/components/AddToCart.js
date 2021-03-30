import { useCartData } from "../contexts/data-context";
import {
  ADD_TO_CART,
  INC_CART_QUANTITY,
  DEC_CART_QUANTITY,
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
            className="btn btn-primary"
            onClick={() => decrementQty(product.id)}
          >
            <i className="fas fa-minus"></i>
          </button>
          {product.cartQty}
          <button
            className="btn btn-primary"
            onClick={() => incrementQty(product.id)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => addToCartHandler(product.id)}
        >
          <span>Add to Cart </span>
          <i className="fas fa-cart-plus"></i>
        </button>
      )}
    </>
  );
}
