import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Feed.css";
import PostCard from "../PostCard/PostCard";
import Spinner from "../Spinner/Spinner";
import {
  fetchPostsIds,
  selectAllPosts,
  selectFeedStatus,
} from "../../redux/slices/feed/feedSlice";

const Feed = () => {
  const postsArray = useAppSelector(selectAllPosts);
  const feedStatus = useAppSelector(selectFeedStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (feedStatus === "idle") {
      // StrictMode in index.tsx makes it run more than once
      // console.log("fetching ids");
      dispatch(fetchPostsIds());
    }
  }, [feedStatus, dispatch]);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return (
    <div className="feedContainer">
      {feedStatus === "idle" ? <Spinner /> : <div>{renderPostCards}</div>}
    </div>
  );
};

export default Feed;
