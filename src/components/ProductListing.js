import { useCartData } from "../contexts/dataContext";
import { ADD_TO_WISHLIST } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";

export default function ProductListing() {
  const { state, dispatch } = useCartData();

  const toggleWishlist = (id) =>
    dispatch({ type: ADD_TO_WISHLIST, payload: id });

  return (
    < div className="product-listing-container">
      <h2>Product Listing</h2>
      <ul>
        {state.productData.map((product) => (
          <div className="list-stacked">
            <li key={product.id} className="listing">
              <span>{product.name}</span>
              <span> - {product.price} </span>
              {!product.wishlist ? (
                <button
                  className="btn-secondary"
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
    </div>
  );
}
