import { useCartData } from "../contexts/dataContext";

export function Cart() {
  const { state } = useCartData();
  return (
    <>
      <h1>Cart</h1>
      {state.productData.map((product) =>
        product.cartQty > 0 ? (
          <li key={product.id} className="listing">
            {product.name}
          </li>
        ) : null
      )}
    </>
  );
}
