import {
  Post,
  selectSelectedPost,
  setSelectedPost,
} from "../../redux/slices/post/postSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { timeDifference } from "../../utils/helpers";
import { Icon } from "@iconify/react";
import "./PostCard.css";

const PostCard = (props: Post) => {
  const dispatch = useAppDispatch();
  const selectedPost = useAppSelector(selectSelectedPost);

  const { id, title, score, time, by, descendants } = props;
  const convertedTime = timeDifference(time, false);
  let selectedStyle: React.CSSProperties = {};

  if (selectedPost && selectedPost.id === id) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      selectedStyle = {
        // border: "2px solid #2c7da0",
        boxShadow: "0 0 0.25rem 0.0625rem #2a6f97",
      };
    } else {
      selectedStyle = {
        border: "2px solid #2c7da0",
        boxShadow: "0 0 0.25rem 0.0625rem #2A6F97",
      };
    }
  }

  return (
    <div
      className="postcard-container"
      onClick={() => {
        dispatch(setSelectedPost(props));
      }}
      style={selectedStyle}
    >
      <div className="postcard-title">{title}</div>
      <div className="postcard-info-container">
        <div className="postcard-info-piece">
          <Icon
            icon="mdi:arrow-up-bold-outline"
            className="postcard-info-icon"
          />
          {score.toString()}
        </div>
        <div className="postcard-info-piece">
          <Icon icon="mdi:comment-outline" className="postcard-info-icon" />
          {descendants ?? 0}
        </div>
        <div className="postcard-info-piece">
          <Icon icon="mdi:clock-outline" className="postcard-info-icon" />
          {convertedTime}
        </div>
        <div className="postcard-info-piece">
          <Icon icon="mdi:account-outline" className="postcard-info-icon" />
          <span>{by}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
