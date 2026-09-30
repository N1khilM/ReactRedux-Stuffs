import { useDispatch, useSelector } from "react-redux";
import { addSearchCategory, addSearchText } from "../features/SearchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const search = useSelector((state) => state.search.searchText);
  const category = useSelector((state) => state.search.searchCategory);
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div>
      <input
        value={search}
        placeholder="type here to search"
        onChange={(e) => dispatch(addSearchText(e.target.value))}
      />
      <select
        value={category}
        onChange={(e) => dispatch(addSearchCategory(e.target.value))}
      >
        {categories.map((cat) => (
          <div key={cat}>
            <option value={cat}>{cat}</option>
          </div>
        ))}
      </select>
    </div>
  );
};

export default Search;
