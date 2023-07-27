import { Post } from "../../redux/slices/posts/postsSlice";
import "./PostCard.css";

const PostCard = (props: Post) => {
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
    <div className="postcard-container">
      <div className="postcard-title">{title}</div>
      <div className="postcard-info-container">
        <div className="postcard-info-piece postcard-points-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="postcard-info-icon"
          >
            <path
              fill="currentColor"
              d="M16 13v8H8v-8H2L12 3l10 10h-6m-9-2h3v8h4v-8h3l-5-5l-5 5Z"
            />
          </svg>
          {score.toString()}
        </div>
        <div className="postcard-info-piece postcard-comments-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="postcard-info-icon"
          >
            <path
              fill="currentColor"
              d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6Z"
            />
          </svg>
          {kids ? kids.length : 0}
        </div>
        <div className="postcard-info-piece postcard-time-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="postcard-info-icon"
          >
            <path
              fill="currentColor"
              d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
            />
          </svg>
          {convertedTime}
        </div>
        <div className="postcard-info-piece postcard-author-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="postcard-info-icon"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
            />
          </svg>
          {by}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
