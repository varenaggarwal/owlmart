import { useCartData } from "../contexts/dataContext";
import {
  ADD_TO_CART,
  INC_CART_QUANTITY,
  DEC_CART_QUANTITY
} from "../reducer/reducer";

export function AddToCart({ product }) {
  const { state, dispatch } = useCartData();

  const addToCartHandler = (id) => dispatch({ type: ADD_TO_CART, payload: id });

  const incrementQty = (id) =>
    dispatch({ type: INC_CART_QUANTITY, payload: id });

  const decrementQty = (id) => {
    console.log("Here");
    dispatch({ type: DEC_CART_QUANTITY, payload: id });
    console.log({ state });
  };

  return (
    <>
      {product.cartQty > 0 ? (
        <div>
          <button className="btn" onClick={() => incrementQty(product.id)}>
            +
          </button>
          {product.cartQty}
          <button className="btn" onClick={() => decrementQty(product.id)}>
            -
          </button>
        </div>
      ) : (
        <button className="btn" onClick={() => addToCartHandler(product.id)}>
          Add to Cart
        </button>
      )}
    </>
  );
}
