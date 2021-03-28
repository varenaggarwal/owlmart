import { SORT, TOGGLE_DELIVERY, TOGGLE_INVENTORY } from "../reducer/reducer";
import { useCartData } from "../contexts/dataContext";

export function ListingControls() {
  const { state, dispatch } = useCartData();
  return (
    <div>
      <div className="card card-shadow">
        <h3>Sort By</h3>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: SORT, payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={
              state.listingSettings.sortBy &&
              state.listingSettings.sortBy === "PRICE_HIGH_TO_LOW"
            }
          ></input>
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: SORT, payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={
              state.listingSettings.sortBy &&
              state.listingSettings.sortBy === "PRICE_LOW_TO_HIGH"
            }
          ></input>
          Price - Low to High
        </label>
      </div>
      <div className="card card-shadow">
        <h3>Filter</h3>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: TOGGLE_INVENTORY })}
            checked={state.listingSettings.showInventoryAll}
          ></input>
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: TOGGLE_DELIVERY })}
            checked={state.listingSettings.showFastDeliveryOnly}
          ></input>
          Fast Delivery Only
        </label>
      </div>
    </div>
  );
}
