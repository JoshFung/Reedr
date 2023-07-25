import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  author: string;
  descendants: number;
  children?: Array<number>; // TODO: do we want to keep this?
  points: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

interface PostsState {
  currentPostId: number;
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
    {
      id: 36857314,
      author: "luu",
      descendants: 37,
      children: [
        36857935, 36858291, 36858372, 36858178, 36858258, 36858671, 36858382,
        36858385, 36858157, 36858558, 36857825, 36857901, 36858270,
      ],
      points: 138,
      time: 1690254026,
      title:
        "Got called to a professor's office after a complaint his SPARC4 was running slow",
      type: "story",
      url: "https://infosec.exchange/@paco/110772422266480371",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
