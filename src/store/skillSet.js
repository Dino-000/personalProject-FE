import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  industryCategory: "",
  type: "",
  level: "",
};

const skillSetSlice = createSlice({
  name: "skillSet",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setIndustryCategory(state, action) {
      state.industryCategory = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
  },
});
export const skillSetActions = skillSetSlice.actions;
export default skillSetSlice.reducer;
