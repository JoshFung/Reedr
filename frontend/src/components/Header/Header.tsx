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
    dispatch(setNoPost());
  };

  return (
    <header className="header-container">
      <h2
        className="header-title"
        onClick={readerOpen ? handleTitleClick : undefined}
      >
        {selectedPost ? "Close" : "Reedr"}
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
          Home
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.NEW))}
        >
          <Icon icon="mdi:history" className="header-link-icon" />
          New
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.BEST))}
        >
          <Icon icon="mdi:star-outline" className="header-link-icon" />
          Best
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.ASK))}
        >
          <Icon icon="mdi:help" className="header-link-icon" />
          Ask
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.SHOW))}
        >
          <Icon icon="mdi:bullhorn-outline" className="header-link-icon" />
          Show
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.JOB))}
        >
          <Icon icon="mdi:briefcase-outline" className="header-link-icon" />
          Jobs
        </li>
      </ul>
    </header>
  );
};

export default Header;
