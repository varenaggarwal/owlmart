import { useCartData } from "../contexts/dataContext";
import { INC_CART_QUANTITY, DEC_CART_QUANTITY } from "../reducer/reducer";

export function Cart() {
  const { state , dispatch } = useCartData();

  const incrementQty = (id) =>
    dispatch({ type: INC_CART_QUANTITY, payload: id });

  const decrementQty = (id) =>{
    console.log("Here")
    dispatch({ type: DEC_CART_QUANTITY, payload: id });
    console.log({state})
  }

  return (
    <>
      <h1>Cart</h1>

      {state.productData.map((product) =>
        product.cartQty > 0 ? (
          <li key={product.id} className="listing">
            {product.name}
            <button className="btn" onClick={() => incrementQty(product.id)}>
              +
            </button>
            {product.cartQty}
            <button className="btn" onClick={() => decrementQty(product.id)}>
              -
            </button>
          </li>
        ) : null
      )}
    </>
  );
}
