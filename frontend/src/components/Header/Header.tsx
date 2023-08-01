import "./Header.css";
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 -3 24 24"
          >
            <path
              fill="currentColor"
              d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
            />
          </svg>
          Home
        </li>
        <li
          className="headerLink"
          onClick={() => dispatch(changeFeedMode(FeedModeEnum.NEW))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 -3 24 24"
          >
            <path
              fill="currentColor"
              d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08V8M13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
            />
          </svg>
          Latest
        </li>
        <li
          className="headerLink"
          onClick={() => dispatch(changeFeedMode(FeedModeEnum.ASK))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 -4 24 24"
          >
            <path
              fill="currentColor"
              d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
            />
          </svg>
          Ask
        </li>
      </ul>
    </header>
  );
};

export default Header;
