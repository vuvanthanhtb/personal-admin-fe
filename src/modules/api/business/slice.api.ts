import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AssignRoleRequest, SearchApiRequest } from "./model.api";

export const getApiList = createAsyncThunk(
  "api/getApiList",
  async (payload: SearchApiRequest) => {
    console.log(payload);

    return [];
  }
);

export const assignRole = createAsyncThunk(
  "api/assignRole",
  async (payload: AssignRoleRequest) => {
    console.log(payload);

    return true;
  }
);

const initialState = {
  list: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default apiSlice.reducer;
