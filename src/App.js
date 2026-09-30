import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">
            <button>Products</button>
          </Link>
          <Link to="/cart">
            <button>Cart</button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
