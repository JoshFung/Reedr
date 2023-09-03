import "./Header.css";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setFeedMode } from "../../redux/slices/feed/feedSlice";

import {
  selectSelectedPost,
  setNoPost,
} from "../../redux/slices/post/postSlice";
import { FeedModeEnum } from "../../utils/enums";

const Header = () => {
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(selectSelectedPost);

  const readerOpen = selectedPost !== null;

  const handleTitleClick = () => {
    readerOpen ? dispatch(setNoPost()) : window.location.reload();
  };

  return (
    <header className="header-container">
      <h2 className="header-title" onClick={handleTitleClick}>
        {selectedPost ? "close" : "reedr"}
      </h2>
      <ul className="header-feed-list">
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.TOP))}
        >
          <Icon
            icon="material-symbols:home-outline"
            className="header-link-icon"
          />
          <h6 className="header-link-text">Home</h6>
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.NEW))}
        >
          <Icon icon="mdi:history" className="header-link-icon" />
          <h6 className="header-link-text">New</h6>
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.BEST))}
        >
          <Icon icon="mdi:star-outline" className="header-link-icon" />
          <h6 className="header-link-text">Best</h6>
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.ASK))}
        >
          <Icon
            icon="fluent:chat-bubbles-question-24-regular"
            className="header-link-icon"
          />
          <h6 className="header-link-text">Ask</h6>
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.SHOW))}
        >
          <Icon icon="mdi:human-male-board" className="header-link-icon" />
          <h6 className="header-link-text">Show</h6>
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.JOB))}
        >
          <Icon icon="mdi:briefcase-outline" className="header-link-icon" />
          <h6 className="header-link-text">Job</h6>
        </li>
      </ul>
    </header>
  );
};

export default Header;
