import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "./Feed.css";
import PostCard from "../PostCard/PostCard";
import Spinner from "../Spinner/Spinner";
import {
  fetchPosts,
  fetchPostsIds,
  selectAllPosts,
  selectAllPostsIds,
  selectPostIdsStatus,
  selectPostStatus,
} from "../../redux/slices/feed/feedSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import FillerCard from "../FillerCard/FillerCard";
import { FillerCardEnum, StatusEnum } from "../../utils/enums";

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
    return <PostCard key={post.id} {...post} />;
  });

  return (
    <div className="feedContainer">
      {postIdsStatus !== StatusEnum.SUCCEEDED ||
      (postsStatus !== StatusEnum.SUCCEEDED && postsArray.length < 50) ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          next={() => dispatch(fetchPosts())}
          hasMore={postsArray.length < postsIds.length}
          dataLength={postsArray.length}
          loader={
            <FillerCard
              type={FillerCardEnum.BOTTOM_MESSAGE}
              message={"Loading more reeds... 🫧"}
            />
          }
          scrollThreshold="0.2"
          endMessage={
            <FillerCard
              type={FillerCardEnum.BOTTOM_MESSAGE}
              message={"No more reeds! 🌊"}
            />
          }
          height="90vh"
          // scrollableTarget="feedContainer" // from ContentPage -- Allows us to scroll to load more posts
          className="infinite-scroll"
        >
          {renderPostCards}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Feed;
