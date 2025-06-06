import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "./service.auth";
import type { LoginRequest } from "./model.auth";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: LoginRequest, thunkAPI) => {
    const data = await AuthService.loginUser(payload);
    if (data) {
      thunkAPI.dispatch(getCurrentUser());
      return true;
    }
    return false;
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    const data = await AuthService.getCurrentUser();
    return data;
  }
);

const initialState = {
  isLogin: false,
  currentUser: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogin = action.payload;
    });
     builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export default auth.reducer;
