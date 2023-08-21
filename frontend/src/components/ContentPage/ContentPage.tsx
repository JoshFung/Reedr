import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/post/postSlice";
import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <div className="content-container">
      {/* <div className="mobile-container">
        {selectedPost ? <Reader {...selectedPost} /> : <Feed />}
      </div>
      <div className="web-container">
        <div className="feed-column">
          <Feed />
        </div>
        <div className="reader-column">
          {selectedPost && <Reader {...selectedPost} />}
        </div>
      </div> */}
      {selectedPost ? <Reader {...selectedPost} /> : <Feed />}
    </div>
  );
};

export default ContentPage;
