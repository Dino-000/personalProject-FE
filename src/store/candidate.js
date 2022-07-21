import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  dob: "",
  location: "",
  occupation: "",
  seniority: "",
  gpa: "",
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setDob(state, action) {
      state.dob = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setOccupation(state, action) {
      state.occupation = action.payload;
    },
    setSeniority(state, action) {
      state.seniority = action.payload;
    },
    setGpa(state, action) {
      state.gpa = action.payload;
    },
  },
});

export const candidateActions = candidateSlice.actions;
export default candidateSlice.reducer;
