import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRolesList = createAsyncThunk("role/getRolesList", async () => {
  return [];
});

const initialState = {
  list: [],
};

const role = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRolesList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default role.reducer;
