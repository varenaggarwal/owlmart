import { useCartData } from "../contexts/data-context";
import { REMOVE_FROM_WISHLIST } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";

export function Wishlist() {
  const { state, dispatch } = useCartData();
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      <div className="product-listing-container">
        {state.productData.map((product) =>
          product.wishlist ? (
            <div key={product.id} className="card card-shadow">
              <img className="img-responsive" src={product.img} />
              <h3>{product.name}</h3>
              <p>
                <span>Price: </span>
                <span>₹</span>
                <span>{product.price}</span>
                <button
                  className="cross"
                  onClick={() =>
                    dispatch({
                      type: REMOVE_FROM_WISHLIST,
                      payload: product.id,
                    })
                  }
                >
                  <i className="fas fa-trash"></i>
                </button>
              </p>
              <AddToCart product={product} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
