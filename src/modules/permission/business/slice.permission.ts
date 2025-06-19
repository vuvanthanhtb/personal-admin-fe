import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  CreateOrUpdatePermissionRequest,
  SearchPermissionsRequest,
} from "./model.permission";

export const getPermissionsList = createAsyncThunk(
  "permission/getPermissionsList",
  async (payload: SearchPermissionsRequest) => {
    console.log(payload);
    return [];
  }
);

export const createPermission = createAsyncThunk(
  "permission/createPermission",
  async (payload: CreateOrUpdatePermissionRequest) => {
    console.log(payload);

    return true;
  }
);

export const updatePermission = createAsyncThunk(
  "permission/updatePermission",
  async (payload: CreateOrUpdatePermissionRequest) => {
    console.log(payload);

    return true;
  }
);

const initialState = {
  list: [],
};

const permissionSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPermissionsList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default permissionSlice.reducer;
