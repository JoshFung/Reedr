import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: Number;
  author: String;
  descendants: Number;
  children?: Array<Number>; // TODO: do we want to keep this?
  points: Number;
  time: Number;
  title: String;
  type: String;
  url: String;
}

interface PostsState {
  currentPostId: Number;
  postsArray: Array<Post>;
}

const initialState: PostsState = {
  currentPostId: 1,

  // TODO: later on remove this dummy data
  postsArray: [
    {
      id: 1,
      author: "pg",
      descendants: 15,
      children: [15, 234509, 487171, 82729],
      points: 57,
      time: 1160418111,
      title: "Y Combinator",
      type: "story",
      url: "http://ycombinator.com",
    },
    {
      id: 2,
      author: "phyllis",
      descendants: 0,
      points: 16,
      time: 1160418628,
      title: "A Student's Guide to Startups",
      type: "story",
      url: "http://www.paulgraham.com/mit.html",
    },
    {
      id: 3,
      author: "phyllis",
      descendants: 0,
      points: 7,
      time: 1160419233,
      title: "Woz Interview: the early days of Apple",
      type: "Story",
      url: "http://www.foundersatwork.com/stevewozniak.html",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
