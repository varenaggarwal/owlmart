import { SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "../reducer/reducer";
import { useCartData } from "../contexts/dataContext";

export function FilterControls() {
  const { dispatch } = useCartData();
  return (
    <div>
      <h2>Filter</h2>
      <div className="card card-shadow">
        <h3>Sort By</h3>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: SORT_HIGH_TO_LOW })}
          ></input>
          Price - High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: SORT_LOW_TO_HIGH })}
          ></input>
          Price - Low to High
        </label>
      </div>
    </div>
  );
}
