import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchText: "",
    searchCategory: "All",
  },
  reducers: {
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
  },
});

export const { addSearchCategory, addSearchText } = SearchSlice.actions;
export default SearchSlice.reducer;
