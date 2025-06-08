import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoService from "./service.todo";
import type { CalendarNotifyRequest } from "./model.todo";

export const triggerN8nEvent = createAsyncThunk(
  "todo/triggerN8nEvent",
  async (payload: CalendarNotifyRequest) => {
    await TodoService.triggerN8nEvent(payload);
  }
);

const initialState = {};

const auth = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default auth.reducer;
