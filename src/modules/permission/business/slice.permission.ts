import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPermissionsList = createAsyncThunk(
  "permission/getPermissionsList",
  async () => {
    return [];
  }
);

const initialState = {
  list: [],
};

const permission = createSlice({
  name: "permission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPermissionsList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default permission.reducer;
