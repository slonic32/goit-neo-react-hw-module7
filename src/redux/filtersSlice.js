import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export function selectNameFilter(state) {
  return state.filters.name;
}

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
