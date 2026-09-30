import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  },
);
const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
    loading: "",
    error: "",
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    addToCart: (state, action) => {
      const exists = state.cart.find((p) => p.id === action.payload.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    increaseQuantity: (state, action) => {
      const exists = state.cart.find((c) => c.id === action.payload);
      if (exists) {
        exists.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const exists = state.cart.find((c) => c.id === action.payload);
      if (exists && exists.quantity > 1) {
        exists.quantity -= 1;
      }
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addProduct,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartItem,
} = ProductSlice.actions;
export default ProductSlice.reducer;
