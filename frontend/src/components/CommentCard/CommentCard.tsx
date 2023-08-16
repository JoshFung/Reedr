import { Icon } from "@iconify/react";
import { Comment } from "../../redux/slices/post/postSlice";
import { timeDifference } from "../../utils/helpers";
import "./CommentCard.css";
import he from "he";
import parse from "html-react-parser";
import { useState } from "react";
import { FillerCardEnum } from "../../utils/enums";
import FillerCard from "../FillerCard/FillerCard";

interface CommentCardProps {
  comment: Comment;
  depth: number;
}

const CommentCard = (props: CommentCardProps) => {
  const { by, time, text, kids } = props.comment;
  const { depth } = props;
  const convertedTime = timeDifference(time, true);
  const directChildren = kids?.length ?? 0;

  const [showChildren, setShowChildren] = useState(false);

  const convertText = (text: string) => {
    const convertChars = he.decode(text);
    const convertTags = convertChars.replace(/<p>/g, "\n\n");
    return parse(convertTags);
  };

  const loadChildrenText = `Load ${directChildren} more comments`;

  return (
    <>
      <div className="comment-container">
        <div className="comment">
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
      {directChildren === 0 ? null : (
        <div className="comment-children-container">
          {showChildren ? (
            <div className="comment-children"></div>
          ) : (
            <FillerCard
              type={FillerCardEnum.SHOW_CHILDREN}
              depth={depth}
              message={loadChildrenText}
            />
          )}
        </div>
      )}
    </>
  );
};

export default CommentCard;
