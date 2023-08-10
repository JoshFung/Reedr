import "./Header.css";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFeedMode, FeedModeEnum } from "../../redux/slices/feed/feedSlice";
import {
  selectSelectedPost,
  setNoPost,
} from "../../redux/slices/posts/postsSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(selectSelectedPost);

  const isClickable = selectedPost !== null;

  const handleTitleClick = () => {
    dispatch(setNoPost());
  };

  return (
    <header className="header-container">
      <h2
        className="header-title"
        onClick={isClickable ? handleTitleClick : undefined}
      >
        {selectedPost ? "Close" : "Reedr"}
      </h2>
      {/* <div
        // className={`header-title-container ${clickable}`}
        // onClick = {selectedPost && handleTitleClick} not working for some reason
        className="header-title-container"
        onClick={isClickable ? handleTitleClick : undefined}
      >
        <h2 className="header-title">{selectedPost ? 'Close' : 'Reedr'}</h2>
        {selectedPost && (
          <h2 className="header-close-reader-subtitle">
            Click to close reader
          </h2>
        )}
      </div> */}
      <ul className="header-link-list">
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.TOP))}
        >
          <Icon icon="material-symbols:home-outline" width="16" height="16" />
          Home
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.NEW))}
        >
          <Icon icon="mdi:history" width="16" height="16" />
          Latest
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.ASK))}
        >
          <Icon icon="ic:outline-chat" width="16" height="16" />
          Ask
        </li>
      </ul>
    </header>
  );
};

export default Header;
