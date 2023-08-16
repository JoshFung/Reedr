import { Icon } from "@iconify/react";
import { Comment } from "../../redux/slices/post/postSlice";
import { timeDifference } from "../../utils/helpers";
import "./CommentCard.css";
import he from "he";
import parse from "html-react-parser";

const CommentCard = (props: Comment) => {
  const { by, time, text, kids } = props;
  const convertedTime = timeDifference(time, true);
  const directChildren = kids?.length ?? 0;

  const convertText = (text: string) => {
    const convertChars = he.decode(text);
    const convertTags = convertChars.replace(/<p>/g, "\n\n");
    return parse(convertTags);
  };

  return (
    <div className="comment-container">
      <div className="comment">
        {/* <div className="comment-bars"></div> */}
        <div className="comment-content">
          <p className="comment-text">{convertText(text)}</p>
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
