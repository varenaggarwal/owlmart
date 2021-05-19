import {
  CLEAR_FILTERS,
  SORT,
  TOGGLE_DELIVERY_FILTER,
  TOGGLE_INVENTORY_FILTER,
} from "../reducer/reducer";
import { useCartData } from "../contexts/data-context";
import { categories } from "../database";

export function ListingControls() {
  const { state, dispatch } = useCartData();
  return (
    <div className="side-menu">
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
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: CLEAR_FILTERS })}
        >
          Clear All
        </button>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: TOGGLE_INVENTORY_FILTER })}
            checked={state.listingSettings.showInventoryAll}
          ></input>
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: TOGGLE_DELIVERY_FILTER })}
            checked={state.listingSettings.showFastDeliveryOnly}
          ></input>
          Fast Delivery Only
        </label>
        <div>
          {categories.map((category) => (
            <div>
              <label>
                <input
                  type="checkbox"
                  // onChange={}
                  checked={true}
                ></input>
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
