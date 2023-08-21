import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/post/postSlice";
import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <div className="contentContainer" id="topContentContainer">
      {selectedPost ? <Reader {...selectedPost} /> : <Feed />}
    </div>
  );
};

export default ContentPage;
