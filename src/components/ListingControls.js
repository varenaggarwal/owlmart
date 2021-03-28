import { SORT } from "../reducer/reducer";
import { useCartData } from "../contexts/dataContext";

export function ListingControls() {
  const { state, dispatch } = useCartData();
  return (
    <div>
      <h2>Filter</h2>
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
              state.filterSettings.sortBy &&
              state.filterSettings.sortBy === "PRICE_HIGH_TO_LOW"
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
              state.filterSettings.sortBy &&
              state.filterSettings.sortBy === "PRICE_LOW_TO_HIGH"
            }
          ></input>
          Price - Low to High
        </label>
      </div>
    </div>
  );
}
