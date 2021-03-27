import { useCartData } from "../contexts/dataContext";
import { ADD_TO_WISHLIST } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";
import { FilterControls } from "./FilterControls";

export default function ProductListing() {
  const { state, dispatch } = useCartData();

  const toggleWishlist = (id) =>
    dispatch({ type: ADD_TO_WISHLIST, payload: id });

  return (
    <div className="product-listing-container">
      <h2>Product Listing</h2>
      <FilterControls/>
        {state.productData.map((product) => (
          <div class="card card-shadow">
            <div class="new-bar">NEW</div>
            <img class="img-responsive" src={product.img} />
            <h3>{product.name}</h3>
            <p>
              <span>Price: </span>
              <span>₹</span>
              <span>{product.price}</span>
            </p>
            <AddToCart product={product} />
          </div>
        ))}
    </div>
  );
}
