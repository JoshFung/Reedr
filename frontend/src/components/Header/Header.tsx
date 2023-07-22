import React from "react";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeToAsk,
  changeToNew,
  changeToTop,
} from "../../redux/slices/feed/feedSlice";

const Header = () => {
  const feedMode = useAppSelector((state) => state.feed.feedMode);
  const dispatch = useAppDispatch();

  return (
    <header className="headerContainer">
      <h1 className="headerLogo">Reedr</h1>
      <ul className="headerLinkList">
        <li className="headerLink" onClick={() => dispatch(changeToTop())}>
          Home
        </li>
        <li className="headerLink" onClick={() => dispatch(changeToNew())}>
          Latest
        </li>
        <li className="headerLink" onClick={() => dispatch(changeToAsk())}>
          Ask
        </li>
      </ul>
    </header>
  );
};

export default Header;
