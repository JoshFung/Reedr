import { Post } from "../../redux/slices/posts/postsSlice";

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

const PostCard = (props: Post) => {
  const { title, points, time, author, children } = props;
  const convertedTime = timeDifference(time);
  console.log(`convertedTime: ${convertedTime}`);
  return (
    <div className="postcard-container">
      <div className="postcard-title">{title}</div>
      <div className="postcard-info-container">
        <div className="postcard-points-container">
          <div className="postcard-points">{points.toString()}</div>
        </div>
        <div className="postcard-comments-container">
          {children ? children.length : 0}
        </div>
        <div className="postcard-time-container">{convertedTime}</div>
        <div className="postcard-author-container">{author}</div>
      </div>
    </div>
  );
};

export default PostCard;
