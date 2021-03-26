import { useCartData } from "../contexts/dataContext";
import { ADD_TO_WISHLIST } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";

export default function ProductListing() {
  const { state, dispatch } = useCartData();

  const toggleWishlist = (id) =>
    dispatch({ type: ADD_TO_WISHLIST, payload: id });

  return (
    <>
      <h1>Product Listing</h1>
      <ul>
        {state.productData.map((product) => (
          <div className="list-stacked">
            <li key={product.id} className="listing">
              <span>{product.name}</span>
              <span> - {product.price} </span>
              {!product.wishlist ? (
                <button
                  className="btn-primary"
                  onClick={() => toggleWishlist(product.id)}
                >
                  Heart
                </button>
              ) : null}
              <AddToCart product={product} />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
