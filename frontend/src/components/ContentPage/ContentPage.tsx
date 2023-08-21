import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/post/postSlice";
import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <div className="contentContainer" id="topContentContainer">
      {/* <Feed />
      {selectedPost ? <Reader {...selectedPost} /> : null} */}
      {selectedPost ? <Reader {...selectedPost} /> : <Feed />}
    </div>

    // <div className="background">
    //   <div className="leftContainer"></div>
    //   <div className="rightContainer"></div>
    // </div>
  );
};

export default ContentPage;
