import { useCartData } from "../contexts/data-context";
import { TOGGLE_FROM_WISHLIST } from "../reducer/reducer";
import { AddToCart } from "./AddToCart";
import { ListingControls } from "./ListingControls";

export function ProductListing() {
  const { state, dispatch } = useCartData();

  const toggleWishlist = (id) =>
    dispatch({ type: TOGGLE_FROM_WISHLIST, payload: id });

  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }

    return productList;
  };

  const getFilteredData = (
    productList,
    { showInventoryAll, showFastDeliveryOnly }
  ) => {
    return productList
      .filter((product) => (showInventoryAll ? true : product.inStock))
      .filter((product) =>
        showFastDeliveryOnly ? product.fastDelivery : true
      );
  };

  const sortedData = getSortedData(
    state.productData,
    state.listingSettings.sortBy
  );

  const filteredData = getFilteredData(sortedData, state.listingSettings);

  return (
    <div className="product-listing-container">
      <h2>Product Listing</h2>
      <ListingControls />
      {filteredData.map((product) => (
        <div key={product.id} className="card card-shadow">
          <div className="new-bar">NEW</div>
          <img className="img-responsive" src={product.img} />
          <h3>{product.name}</h3>
          <p>
            <span>Price: </span>
            <span>₹</span>
            <span>{product.price}</span>
            <button
              className={product.wishlist ? "heart heart-activated" : "heart"}
              onClick={() => toggleWishlist(product.id)}
            >
              <i
                className={product.wishlist ? "fas fa-heart" : "far fa-heart"}
              ></i>
            </button>
          </p>

          <AddToCart product={product} />
        </div>
      ))}
    </div>
  );
}
