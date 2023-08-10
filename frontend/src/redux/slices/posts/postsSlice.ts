import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Post {
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
  selectedPost: Post | null;
}

const initialState: PostsState = {
  selectedPost: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action: { payload: Post }) => {
      state.selectedPost = action.payload;
    },
    setNoPost: (state) => {
      state.selectedPost = null;
    },
  },
});

export const selectSelectedPost = (state: RootState) =>
  state.posts.selectedPost;

export const { setSelectedPost, setNoPost } = postsSlice.actions;

export default postsSlice.reducer;
