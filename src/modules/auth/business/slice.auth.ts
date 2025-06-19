import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REFRESH_TOKEN, TOKEN_CURRENT } from "shared/constants";
import AuthService from "./service.auth";
import type { LoginRequest } from "./model.auth";
import { clearAllSession, setSession } from "shared";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: LoginRequest) => {
    const data = await AuthService.loginUser(payload);
    if (data) {
      setSession(TOKEN_CURRENT, data.accessToken);
      setSession(REFRESH_TOKEN, data.refreshToken);
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

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async () => {
    // TODO:
    clearAllSession();
    window.location.href = "/login";
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
