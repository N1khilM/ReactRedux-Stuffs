import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/ProductSlice";
import searchReducer from "./features/SearchSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
  },
});

export default store;
