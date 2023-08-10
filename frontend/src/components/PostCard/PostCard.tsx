import { Post, setSelectedPost } from "../../redux/slices/posts/postsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Icon } from "@iconify/react";
import "./PostCard.css";

const PostCard = (props: Post) => {
  const dispatch = useAppDispatch();

  const timeDifference = (time: number) => {
    const millisecondsTime = time * 1000;
    const diff = Date.now() - millisecondsTime;
    const timeUnitDict = new Map([
      [31104000000, "yr"],
      [2592000000, "mo"],
      [86400000, "day"],
      [3600000, "hr"],
      [60000, "min"],
    ]);

    for (const [timeUnitMilliseconds, timeUnit] of Array.from(
      timeUnitDict.entries()
    )) {
      const timeUnitCount = Math.floor(diff / timeUnitMilliseconds);

      if (timeUnitCount > 0) {
        return `${timeUnitCount} ${timeUnit}`;
      }
    }

    return `0 min`;
  };

  const { title, score, time, by, kids } = props;
  const convertedTime = timeDifference(time);
  // console.log(`convertedTime: ${convertedTime}`);
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
          {kids ? kids.length : 0}
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
