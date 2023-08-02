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
  selectAllPostsIds,
  selectPostIdsStatus,
  selectPostStatus,
} from "../../redux/slices/feed/feedSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const Feed = () => {
  const postsArray = useAppSelector(selectAllPosts);
  const postsIds = useAppSelector(selectAllPostsIds);
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
      {postIdsStatus !== StatusEnum.SUCCEEDED ||
      (postsStatus !== StatusEnum.SUCCEEDED && postsArray.length < 50) ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          next={() => dispatch(fetchPosts())}
          // next={() =>
          //   setTimeout(() => {
          //     console.log("timeout done");
          //   }, 10000000)
          // }
          hasMore={postsArray.length < postsIds.length}
          dataLength={postsArray.length}
          loader={<Spinner />}
          scrollThreshold="0.8"
          endMessage={<h1>End of posts!</h1>} // change to BottomMessage component
        >
          {renderPostCards}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Feed;
