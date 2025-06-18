import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getApiList = createAsyncThunk("api/getApiList", async () => {
  return [];
});

const initialState = {
  list: [],
};

const api = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default api.reducer;
