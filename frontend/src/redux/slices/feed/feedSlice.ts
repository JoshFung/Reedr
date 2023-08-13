import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../post/postSlice";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../../store";
import { StatusEnum } from "../../../utils/enums";

export enum FeedModeEnum {
  TOP = "top",
  NEW = "new",
  BEST = "best",
  ASK = "ask",
  SHOW = "show",
  JOB = "job",
}

interface FeedState {
  feedMode: FeedModeEnum;
  maxFeedSize: number;
  postsArray: Array<Post>;
  postsIds: Array<number>;
  idStatus: StatusEnum;
  postStatus: StatusEnum;
  error: string | null;
}

const initialState: FeedState = {
  feedMode: FeedModeEnum.TOP,
  maxFeedSize: 0,
  postsArray: [],
  postsIds: [],
  idStatus: StatusEnum.IDLE,
  postStatus: StatusEnum.IDLE,
  error: null,
};

export const fetchPostsIds = createAsyncThunk<number[]>(
  "feed/fetchPostsIds",
  async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.get(`${apiUrl}/Top500Ids`);
      return response.data;
    } catch {
      throw Error("Error fetching post IDs");
    }
  }
);

export const fetchPosts = createAsyncThunk<Post[], void, { state: RootState }>(
  "feed/fetchFiftyPosts",
  async (_, { getState, dispatch }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const state = getState();
    const { postsIds, maxFeedSize } = state.feed;
    if (maxFeedSize < postsIds.length) {
      try {
        const response = await Promise.all(
          postsIds.slice(maxFeedSize, maxFeedSize + 50).map((id) => {
            return axios.get(`${apiUrl}/item/post/${id}`);
          })
        );
        const data = response.map((res) => res.data);
        dispatch(incrementMaxFeedSize());
        return data;
      } catch {
        throw Error("Failed to fetch posts");
      }
    } else {
      throw Error("No more posts to fetch");
    }
  }
);

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeedMode: (state, action: { payload: FeedModeEnum }) => {
      state.feedMode = action.payload;

      // reset to only having 50 posts if we change
      state.maxFeedSize = 0;
    },
    incrementMaxFeedSize: (state) => {
      state.maxFeedSize += 50;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsIds.pending, (state) => {
        state.idStatus = StatusEnum.LOADING;
      })
      .addCase(fetchPostsIds.fulfilled, (state, action) => {
        state.idStatus = StatusEnum.SUCCEEDED;
        state.postsIds = action.payload;
      })
      .addCase(fetchPostsIds.rejected, (state, action) => {
        state.idStatus = StatusEnum.FAILED;
        state.error = action.error.message ?? null;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.postStatus = StatusEnum.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postStatus = StatusEnum.SUCCEEDED;
        state.postsArray = [...state.postsArray, ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postStatus = StatusEnum.FAILED;
        state.error = action.error.message ?? null;
      });
  },
});

// const selectMaxFeedSize = (state: RootState) => state.feed.maxFeedSize;
export const selectAllPostsIds = (state: RootState) => state.feed.postsIds;
export const selectAllPosts = (state: RootState) => state.feed.postsArray;

export const selectPostById = (state: RootState, postId: number) => {
  state.feed.postsArray.find((post) => post.id === postId);
};

export const selectPostIdsStatus = (state: RootState) => state.feed.idStatus;
export const selectPostStatus = (state: RootState) => state.feed.postStatus;

export const { setFeedMode, incrementMaxFeedSize } = feedSlice.actions;

export default feedSlice.reducer;
