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
    if (feedStatus === "idle") {
      dispatch(fetchPostsIds());
    }
  }, [feedStatus, dispatch]);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return <div className="feedContainer">{renderPostCards}</div>;
};

export default Feed;
