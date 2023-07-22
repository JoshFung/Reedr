import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./slices/feed/feedSlice";
import postsReducer from "./slices/posts/postsSlice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
