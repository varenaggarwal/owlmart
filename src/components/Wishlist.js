import { useCartData } from "../contexts/dataContext";
import { REMOVE_FROM_WISHLIST } from "../reducer/reducer";

export function Wishlist() {
  const { state, dispatch } = useCartData();
  return (
    <>
      <h1>Wishlist</h1>
      {state.productData.map((product) =>
        product.wishlist ? (
          <li key={product.id} className="listing">
            <span>{product.name}</span>
            <span> - {product.price}</span>
            <button
              className="btn"
              onClick={() =>
                dispatch({
                  type: REMOVE_FROM_WISHLIST,
                  payload: product.id
                })
              }
            >
              REMOVE
            </button>
          </li>
        ) : null
      )}
    </>
  );
}
