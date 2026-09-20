import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  query: string;
  location: string;
  category: string;
}

const initialState: FiltersState = {
  query: "",
  location: "",
  category: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {

    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    clearFilters(state) {
      state.query = "";
      state.location = "";
      state.category = "";
    },
  },
});

export const { setQuery, setLocation, setCategory, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;