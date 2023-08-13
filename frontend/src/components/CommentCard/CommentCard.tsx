import { Icon } from "@iconify/react";
import { Comment } from "../../redux/slices/post/postSlice";
import { timeDifference } from "../../utils/helpers";
import "./CommentCard.css";

const CommentCard = (props: Comment) => {
  const { by, time, text, kids } = props;
  const convertedTime = timeDifference(time, true);
  const directChildren = kids?.length ?? 0;

  return (
    <div className="comment-container">
      <div className="comment">
        {/* <div className="comment-bars"></div> */}
        <div className="comment-content">
          <p className="comment-text">{text}</p>
          <div className="comment-info">
            <div className="comment-author-date">
              By
              <span>{` ${by} `}</span>
              {`${convertedTime} ago`}
            </div>
            <div className="comment-children">
              <Icon
                icon="mdi:comment-outline"
                width="8"
                height="8"
                className="comment-children-icon"
              />
              {directChildren}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
