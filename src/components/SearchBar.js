import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="search">
      <label className="visualHide" htmlFor="search">
        Search
      </label>
      <input
        value={props.value}
        onChange={props.searchHandler}
        id="search"
        type="text"
        placeholder="Search for a car..."
      />
    </div>
  );
}

export default SearchBar;
