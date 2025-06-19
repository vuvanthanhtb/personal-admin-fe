import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  CreateOrUpdateRoleRequest,
  SearchRolesRequest,
} from "./model.role";

export const getRolesList = createAsyncThunk(
  "role/getRolesList",
  async (payload: SearchRolesRequest) => {
    console.log(payload);

    return [];
  }
);

export const createRole = createAsyncThunk(
  "role/createRole",
  async (payload: CreateOrUpdateRoleRequest) => {
    console.log(payload);

    return true;
  }
);

export const updateRole = createAsyncThunk(
  "role/updateRole",
  async (payload: CreateOrUpdateRoleRequest) => {
    console.log(payload);

    return true;
  }
);

const initialState = {
  list: [],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRolesList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default roleSlice.reducer;
