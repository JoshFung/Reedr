import { createSlice } from "@reduxjs/toolkit";

interface FeedState {
  feedMode: "top" | "new" | "best" | "ask" | "show" | "job";
}

const initialState: FeedState = {
  feedMode: "top",
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
});
