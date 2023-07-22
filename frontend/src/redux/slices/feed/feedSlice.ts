import { createSlice } from "@reduxjs/toolkit";

interface FeedState {
  feedMode: "top" | "new" | "best" | "ask" | "show" | "job";
}

const initialState: FeedState = {
  feedMode: "top",
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    changeToTop: (state) => {
      state.feedMode = "top";
    },
    changeToNew: (state) => {
      state.feedMode = "new";
    },
    changeToBest: (state) => {
      state.feedMode = "best";
    },
    changeToAsk: (state) => {
      state.feedMode = "ask";
    },
    changeToShow: (state) => {
      state.feedMode = "show";
    },
    changeToJob: (state) => {
      state.feedMode = "job";
    },
  },
});

export const {
  changeToTop,
  changeToNew,
  changeToBest,
  changeToAsk,
  changeToShow,
  changeToJob,
} = feedSlice.actions;
export default feedSlice.reducer;
