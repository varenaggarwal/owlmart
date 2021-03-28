import { SORT_HIGH_TO_LOW } from "../reducer/reducer";

export function FilterControls() {
  return (
    <div>
      <h2>Filter</h2>
      <div className="card">
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
          <input type="radio" name="sort"></input>
          Price - Low to High
        </label>
      </div>
    </div>
  );
}
