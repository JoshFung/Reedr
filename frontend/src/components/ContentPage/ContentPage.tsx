import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/post/postSlice";
import { FillerCardEnum } from "../../utils/enums";
import Feed from "../Feed/Feed";
import FillerCard from "../FillerCard/FillerCard";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  return (
    <div className="content-container">
      <div className="mobile-container">
        {selectedPost ? <Reader {...selectedPost} /> : <Feed />}
      </div>
      <div className="web-container">
        <div className="feed-column">
          <Feed />
        </div>
        <div className="reader-column">
          {selectedPost ? (
            <Reader {...selectedPost} />
          ) : (
            <FillerCard type={FillerCardEnum.NO_SELECTED_POST} />
          )}
        </div>
      </div>

      {/* BEFORE TRYING TO MAKE PC FRIENDLY */}
      {/* {selectedPost ? <Reader {...selectedPost} /> : <Feed />} */}
    </div>
  );
};

export default ContentPage;
