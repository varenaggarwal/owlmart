import { useCartData } from "../contexts/data-context";

export function Checkout() {
  const { state } = useCartData();
  const totalAmountReducer = (acc, current) =>
    current.cartQty > 0 ? acc + current.price * current.cartQty : acc + 0;
  return (
    <>
      <h3>
        Total Amount:
        <span> ₹ </span>
        <span>{state.productData.reduce(totalAmountReducer, 0)}</span>
      </h3>
    </>
  );
}
