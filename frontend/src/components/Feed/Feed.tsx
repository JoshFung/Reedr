import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Feed.css";
import PostCard from "../PostCard/PostCard";
import Spinner from "../Spinner/Spinner";
import {
  StatusEnum,
  fetchPosts,
  fetchPostsIds,
  selectAllPosts,
  selectPostIdsStatus,
  selectPostStatus,
} from "../../redux/slices/feed/feedSlice";

const Feed = () => {
  const postsArray = useAppSelector(selectAllPosts);
  const postIdsStatus = useAppSelector(selectPostIdsStatus);
  const postsStatus = useAppSelector(selectPostStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (postIdsStatus === StatusEnum.IDLE) {
      // StrictMode in index.tsx makes it run more than once
      dispatch(fetchPostsIds());
    }
  }, [postIdsStatus, dispatch]);

  useEffect(() => {
    if (
      postIdsStatus === StatusEnum.SUCCEEDED &&
      postsStatus === StatusEnum.IDLE
    ) {
      dispatch(fetchPosts());
    }
  }, [postIdsStatus, postsStatus, dispatch]);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return (
    <div className="feedContainer">
      {postIdsStatus === "idle" ? <Spinner /> : <div>{renderPostCards}</div>}
    </div>
  );
};

export default Feed;
