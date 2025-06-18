import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DATA_TABLE_DEFAULT } from "shared";
import type { SearchUsersRequest } from "./model.user";

export const getUsersList = createAsyncThunk(
  "user/getUsersList",
  async (payload: SearchUsersRequest) => {
    console.log(payload);

    return {
      data: [
        {
          fullName: "Vũ Văn Thanh",
          username: "thanhvv",
          role: "ADMIN",
          createdAt: "06-06-2025",
          status: "ACTIVATE",
        },
        {
          fullName: "Vũ Văn Thanh",
          username: "thanhvv1",
          role: "CALENDAR",
          createdAt: "06-06-2025",
          status: "DEACTIVATE",
        },
      ],
      pageCurrent: 1,
      pageSize: 10,
      totalPage: 1,
      totalRecord: 10,
    };
  }
);

const initialState = {
  list: DATA_TABLE_DEFAULT,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default user.reducer;
