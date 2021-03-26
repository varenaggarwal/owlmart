import { useCartData } from "../contexts/dataContext";
import { AddToCart } from "./AddToCart";

export function Cart() {
  const { state } = useCartData();

  return (
    <>
      <h1>Cart</h1>

      {state.productData.map((product) =>
        product.cartQty > 0 ? (
          <li key={product.id} className="listing">
            {product.name}
            <AddToCart product={product} />
          </li>
        ) : null
      )}
    </>
  );
}
