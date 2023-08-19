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
            width="1rem"
            height="1rem"
          />
          Home
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.NEW))}
        >
          <Icon icon="mdi:history" width="1rem" height="1rem" />
          New
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.BEST))}
        >
          <Icon icon="mdi:star-outline" width="1rem" height="1rem" />
          Best
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.ASK))}
        >
          <Icon icon="mdi:help" width="1rem" height="1rem" />
          Ask
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.SHOW))}
        >
          <Icon icon="mdi:bullhorn-outline" width="1rem" height="1rem" />
          Show
        </li>
        <li
          className="header-link"
          onClick={() => dispatch(setFeedMode(FeedModeEnum.JOB))}
        >
          <Icon icon="mdi:briefcase-outline" width="1rem" height="1rem" />
          Jobs
        </li>
      </ul>
    </header>
  );
};

export default Header;
