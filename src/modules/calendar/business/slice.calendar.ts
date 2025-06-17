import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CalendarService from "./service.calendar";

export const getEvents = createAsyncThunk("calendar/getEvents", async () => {
  const data = await CalendarService.getEvents();
  console.log(999999, data);
  return [];
});

export const addEvent = createAsyncThunk(
  "calendar/addEvent",
  async (payload: any, thunkAPI) => {
    const data = await CalendarService.addEvent(payload);
    console.log(999999, data);
    if (data) {
      thunkAPI.dispatch(getEvents());
    }
    return true;
  }
);

const initialState = {
  isCreatedEvent: false,
  events: [],
};

const calendar = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.isCreatedEvent = false;
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.isCreatedEvent = action.payload;
    });
  },
});

export default calendar.reducer;
