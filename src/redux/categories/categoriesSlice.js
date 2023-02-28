import { createSlice } from "@reduxjs/toolkit";
initialState = [];

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state === []) return (state = "Under Construction");
    },
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
