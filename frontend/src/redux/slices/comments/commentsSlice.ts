import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// TODO: COMPLETE THIS SLICE

export interface Comment {
  id: number;
  by: string;
  descendants?: number;
  kids?: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string; // some posts do not open to new links, but rather are HN text posts
  text?: string; // HN text posts
}

interface PostsState {
  currentPostId: number;
}

const initialState: PostsState = {
  currentPostId: 1,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
