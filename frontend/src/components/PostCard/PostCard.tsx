import { Post } from "../../redux/slices/posts/postsSlice";

const timeDifference = (previous: number) => {
  const diff = Number(new Date()) - previous;
  // const SEC = 1000; // 1000 milliseconds
  // const MIN = 60 * SEC; // 60000 milliseconds
  // const HOUR = 60 * MIN; // 3600000 milliseconds
  // const DAY = 24 * HOUR; // 86400000 milliseconds
  // const MONTH = 30 * DAY; // 2592000000 milliseconds
  // const YEAR = 12 * MONTH; // 31104000000 milliseconds
  // const timeUnitArray = [YEAR, MONTH, DAY, HOUR, MIN];
  // timeUnitArray.forEach((timeUnit) => {

  // })

  const timeUnitDict = new Map([
    [31104000000, "yr"],
    [2592000000, "mo"],
    [86400000, "day"],
    [3600000, "hr"],
    [60000, "min"],
  ]);

  timeUnitDict.forEach((timeUnit, timeUnitMilliseconds) => {
    const timeUnitCount = Math.floor(diff / timeUnitMilliseconds);
    if (timeUnitCount > 0) {
      return `${timeUnitCount} ${timeUnit}`;
    }
  });
  return `0 min`;
};

const PostCard = (props: Post) => {
  return (
    <div className="postcard-container">
      <div className="postcard-title">{props.title}</div>
      <div className="postcard-info-container">
        <div className="postcard-points-container">
          // TODO: Should it just be saved in Post interface as a string? //
          convert it to a string in BE
          <div className="postcard-points">{props.points.toString()}</div>
        </div>
        <div className="postcard-comments-container">
          {props.children ? props.children.length : 0}
        </div>
        <div className="postcard-time-container">
          // TODO: Should the time conversion (ex. 4 h) occur in the BE?
        </div>
        <div className="postcard-author-container"></div>
      </div>
    </div>
  );
};

export default PostCard;
