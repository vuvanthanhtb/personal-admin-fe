import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DATA_TABLE_DEFAULT } from "shared";
import type {
  SearchUsersRequest,
  CreateOrUpdateUserRequest,
} from "./model.user";

export const getUsersList = createAsyncThunk(
  "user/getUsersList",
  async (payload: SearchUsersRequest) => {
    console.log(payload);

    return {
      data: [
        {
          fullName: "Vũ Văn Thanh",
          username: "thanhvv",
          email: "test@mail.com",
          role: "ADMIN",
          createdAt: "06-06-2025",
          status: "ACTIVATE",
        },
        {
          fullName: "Vũ Văn Thanh",
          username: "thanhvv1",
          email: "test@mail.com",
          role: "CALENDAR",
          createdAt: "06-06-2025",
          status: "DEACTIVATE",
        },
      ],
      pageCurrent: 1,
      pageSize: 10,
      totalPage: 1,
      totalRecord: 2,
    };
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload: CreateOrUpdateUserRequest) => {
    console.log(payload);

    return true;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload: CreateOrUpdateUserRequest) => {
    console.log(payload);

    return true;
  }
);

const initialState = {
  list: DATA_TABLE_DEFAULT,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetData: (state) => {
      state.list = DATA_TABLE_DEFAULT;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { resetData } = userSlice.actions;
export default userSlice.reducer;
