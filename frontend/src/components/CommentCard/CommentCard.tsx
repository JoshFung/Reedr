import { Icon } from "@iconify/react";
import { Comment } from "../../redux/slices/post/postSlice";
import {
  fetchCommentsHelper,
  parseText,
  timeDifference,
} from "../../utils/helpers";
import "./CommentCard.css";
import { useEffect, useState } from "react";
import { FillerCardEnum } from "../../utils/enums";
import FillerCard from "../FillerCard/FillerCard";
import DepthBar from "../DepthBar/DepthBar";

interface CommentCardProps {
  comment: Comment;
  depth: number;
}

const CommentCard = (props: CommentCardProps) => {
  const { by, time, text, kids } = props.comment;
  const { depth } = props;
  const convertedTime = timeDifference(time, true);
  const directChildren = kids?.length ?? 0;
  const convertedText = parseText(text);

  const [showChildren, setShowChildren] = useState(false);
  const [childrenComments, setChildrenComments] = useState<Comment[]>([]);

  const loadChildrenText = `Load ${directChildren} more comments`;

  useEffect(() => {
    if (kids) {
      fetchCommentsHelper(kids).then((childrenComments) => {
        setChildrenComments(childrenComments);
      });
    }
  }, [showChildren]);

  const loadCommentCards = childrenComments.map((comment) => {
    return <CommentCard key={comment.id} comment={comment} depth={depth + 1} />;
  });

  let style: React.CSSProperties = {};
  if (showChildren) {
    style = { cursor: "pointer" };
  }

  return (
    <div className="comment-chain-container">
      <div
        className="comment-container"
        onClick={() => {
          if (showChildren) {
            setShowChildren(!showChildren);
          }
        }}
        style={style}
      >
        <DepthBar depth={depth} />
        <div className="comment">
          <div className="comment-content">
            <p className="comment-text">{convertedText}</p>
            <div className="comment-info">
              <div className="comment-author-date">
                By
                <span>{` ${by} `}</span>
                {`${convertedTime} ago`}
              </div>
              <div className="comment-children-info">
                <Icon
                  icon="mdi:comment-outline"
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
            <div className="comment-children">{loadCommentCards}</div>
          ) : (
            <FillerCard
              type={FillerCardEnum.SHOW_CHILDREN}
              depth={depth + 1}
              message={loadChildrenText}
              onClick={() => setShowChildren(!showChildren)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CommentCard;
