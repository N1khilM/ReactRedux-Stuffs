import { useEffect, useState } from "react";
import { addToCart } from "../features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ProductSlice";
import Search from "./Search";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const searchText = useSelector((state) => state.search.searchText);
  const searchCategory = useSelector((state) => state.search.searchCategory);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const filteredProducts = products.filter((p) => {
    const matchText = p.title
      .toLowerCase()
      .includes(searchText.toLowerCase().trim());
    const matchCategory =
      searchCategory === "All" ? p : p.category === searchCategory;

    return matchText && matchCategory;
  });
  const totalNoOfPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div>
      <Search />
      {loading && "Loading..."}
      {error && <p>Error{error.message}</p>}
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {paginatedProducts.map((p) => (
          <div
            key={p.id}
            style={{
              height: "300px",
              width: "250px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <img
              src={p.thumbnail}
              alt="product"
              style={{ objectFit: "contain", width: "100px", height: "100px" }}
            />
            <p>
              <b>Title:</b>
              {p.title}
            </p>
            <p>
              <b>Price:</b>${p.price}
            </p>
            <p>
              <b>Category:</b>
              {p.category}
            </p>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
        <br />
      </div>
      <div>
        <button
          onClick={() =>
            setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          Previous Page
        </button>
        <p>
          <b>
            {currentPage}/{totalNoOfPages}
          </b>
        </p>
        <button
          onClick={() =>
            setCurrentPage(
              currentPage === totalNoOfPages ? currentPage : currentPage + 1,
            )
          }
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductList;
