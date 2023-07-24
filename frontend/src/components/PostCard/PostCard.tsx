import { Post } from "../../redux/slices/posts/postsSlice";

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
