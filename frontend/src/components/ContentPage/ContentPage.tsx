import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/posts/postsSlice";
import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <div className="contentContainer" id="topContentContainer">
      {/* TODO: THIS SEEMS TO BREAK THE INFINITE SCROLL? */}
      {selectedPost ? <Reader {...selectedPost} /> : <Feed />}

      {/* <Feed />
      {selectedPost && <Reader {...selectedPost} />} */}
    </div>
  );
};

export default ContentPage;
