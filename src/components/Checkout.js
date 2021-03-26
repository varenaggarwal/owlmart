import { useCartData } from "../contexts/dataContext";

export function Checkout() {
  const { state } = useCartData();
  const totalAmountReducer = (acc, current) =>
    current.cartQty > 0 ? acc + current.price * current.cartQty : acc + 0;
  return (
    <>
      <h2>
        Total Amount:
        <span> ₹ </span>
        <span>{state.productData.reduce(totalAmountReducer, 0)}</span>
      </h2>
    </>
  );
}
