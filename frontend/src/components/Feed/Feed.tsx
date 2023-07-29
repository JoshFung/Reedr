import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchPostsIds,
  selectAllPosts,
} from "../../redux/slices/posts/postsSlice";
import "./Feed.css";
import PostCard from "../PostCard/PostCard";
import { selectFeedStatus } from "../../redux/slices/posts/postsSlice";

const Feed = () => {
  const postsArray = useAppSelector(selectAllPosts);
  const feedStatus = useAppSelector(selectFeedStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(`Outer useEffect -> feedStatus: ${feedStatus}`);
    if (feedStatus === "idle") {
      console.log(`Inner useEffect -> feedStatus: ${feedStatus}`);
      dispatch(fetchPostsIds());
    }
  }, [feedStatus, dispatch]);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return <div className="feedContainer">{renderPostCards}</div>;
};

export default Feed;
