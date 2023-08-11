import { combineReducers, configureStore } from "@reduxjs/toolkit";
import feedReducer from "./slices/feed/feedSlice";
import postsReducer from "./slices/post/postSlice";

const rootReducer = combineReducers({
  feed: feedReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
