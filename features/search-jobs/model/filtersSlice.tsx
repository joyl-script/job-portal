import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DatePosted = "all" | "hour" | "24h" | "7d" | "30d";

interface FiltersState {
  query: string;
  location: string;
  category: string;
  categories: string[];
  jobTypes: string[];
  experience: string[];
  datePosted: DatePosted;
  salaryMax: number;
}

const initialState: FiltersState = {
  query: "",
  location: "",
  category: "",
  categories: [],
  jobTypes: [],
  experience: [],
  datePosted: "all",
  salaryMax: 0,
};

function toggle(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

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
    toggleCategory(state, action: PayloadAction<string>) {
      state.categories = toggle(state.categories, action.payload);
    },
    toggleJobType(state, action: PayloadAction<string>) {
      state.jobTypes = toggle(state.jobTypes, action.payload);
    },
    toggleExperience(state, action: PayloadAction<string>) {
      state.experience = toggle(state.experience, action.payload);
    },
    setDatePosted(state, action: PayloadAction<DatePosted>) {
      state.datePosted = action.payload;
    },
    setSalaryMax(state, action: PayloadAction<number>) {
      state.salaryMax = action.payload;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const {
  setQuery,
  setLocation,
  setCategory,
  toggleCategory,
  toggleJobType,
  toggleExperience,
  setDatePosted,
  setSalaryMax,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
