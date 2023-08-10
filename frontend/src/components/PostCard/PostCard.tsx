import { Post, setSelectedPost } from "../../redux/slices/posts/postsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { timeDifference } from "../../utils/helpers";
import { Icon } from "@iconify/react";
import "./PostCard.css";

const PostCard = (props: Post) => {
  const dispatch = useAppDispatch();

  const { title, score, time, by, descendants } = props;
  const convertedTime = timeDifference(time, false);

  return (
    <div
      className="postcard-container"
      onClick={() => {
        dispatch(setSelectedPost(props));
      }}
    >
      <div className="postcard-title">{title}</div>
      <div className="postcard-info-container">
        <div className="postcard-info-piece">
          <Icon
            icon="mdi:arrow-up-bold-outline"
            width="12"
            height="12"
            className="postcard-info-icon"
          />
          {score.toString()}
        </div>
        <div className="postcard-info-piece">
          <Icon
            icon="mdi:comment-outline"
            width="12"
            height="12"
            className="postcard-info-icon"
          />
          {descendants ?? 0}
        </div>
        <div className="postcard-info-piece">
          <Icon
            icon="mdi:clock-outline"
            width="12"
            height="12"
            className="postcard-info-icon"
          />
          {convertedTime}
        </div>
        <div className="postcard-info-piece">
          <Icon
            icon="mdi:account-outline"
            width="12"
            height="12"
            className="postcard-info-icon"
          />
          {by}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
