import "./Header.css";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeFeedMode,
  FeedModeEnum,
} from "../../redux/slices/feed/feedSlice";

const Header = () => {
  // const feedMode = useAppSelector((state) => state.feed.feedMode);
  const dispatch = useAppDispatch();

  return (
    <header className="headerContainer">
      <h1 className="headerLogo">Reedr</h1>
      <ul className="headerLinkList">
        <li
          className="headerLink"
          onClick={() => dispatch(changeFeedMode(FeedModeEnum.TOP))}
        >
          <Icon icon="material-symbols:home-outline" width="16" height="16" />
          Home
        </li>
        <li
          className="headerLink"
          onClick={() => dispatch(changeFeedMode(FeedModeEnum.NEW))}
        >
          <Icon icon="mdi:history" width="16" height="16" />
          Latest
        </li>
        <li
          className="headerLink"
          onClick={() => dispatch(changeFeedMode(FeedModeEnum.ASK))}
        >
          <Icon icon="ic:outline-chat" width="16" height="16" />
          Ask
        </li>
      </ul>
    </header>
  );
};

export default Header;
