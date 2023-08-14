import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { StatusEnum } from "../../../utils/enums";
import axios from "axios";

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

export interface Comment {
  id: number;
  by: string;
  parent: number;
  kids?: Array<number>; // note it does not directly tell us descendants like a post does
  text: string;
  time: number;
}

interface PostState {
  selectedPost: Post | null;
  commentsArray: Array<Comment>;
  // commentsIds: Array<number>;
  commentsStatus: StatusEnum;
  priorPostId: number | null;
  error: string | null;
}

const initialState: PostState = {
  selectedPost: null,
  commentsArray: [],
  // commentsIds: [],
  commentsStatus: StatusEnum.IDLE,
  priorPostId: null,
  error: null,
};

const updateCommentsArray = (state: PostState, newComments: Array<Comment>) => {
  const filteredComments = newComments.filter((comment) => {
    return !state.commentsArray.some(
      (oldComment) => oldComment.id === comment.id
    );
  });
  state.commentsArray = [...state.commentsArray, ...filteredComments];
};

export const fetchComments = createAsyncThunk<
  Comment[],
  void,
  { state: RootState }
>("post/fetchComments", async (_, { getState }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const state = getState();
  const { selectedPost } = state.posts;

  if (!selectedPost || !selectedPost.kids) {
    return [];
  }

  try {
    const response = await Promise.all(
      selectedPost.kids.map((id) => {
        return axios.get(`${apiUrl}/item/comment/${id}`);
      })
    );
    const data = response.map((res) => res.data);
    return data;
  } catch {
    throw Error("Failed to fetch comments");
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSelectedPost: (state, action: { payload: Post }) => {
      state.selectedPost = action.payload;
      if (state.selectedPost.id !== state.priorPostId) {
        state.commentsArray = [];
        state.commentsStatus = StatusEnum.IDLE;
        state.priorPostId = state.selectedPost.id;
      }
    },
    setNoPost: (state) => {
      state.selectedPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = StatusEnum.LOADING;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsStatus = StatusEnum.SUCCEEDED;
        updateCommentsArray(state, action.payload);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.commentsStatus = StatusEnum.FAILED;
        state.error = action.error.message ?? null;
      });
  },
});

export const selectSelectedPost = (state: RootState) =>
  state.posts.selectedPost;
export const selectCommentsStatus = (state: RootState) =>
  state.posts.commentsStatus;
export const selectCommentsArray = (state: RootState) =>
  state.posts.commentsArray;

export const { setSelectedPost, setNoPost } = postSlice.actions;

export default postSlice.reducer;
