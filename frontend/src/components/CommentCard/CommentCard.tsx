import { Icon } from "@iconify/react";
import { Comment } from "../../redux/slices/post/postSlice";
import { fetchCommentsHelper, timeDifference } from "../../utils/helpers";
import "./CommentCard.css";
import he from "he";
import parse from "html-react-parser";
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

  const [showChildren, setShowChildren] = useState(false);
  const [childrenComments, setChildrenComments] = useState<Comment[]>([]);

  const convertText = (text: string) => {
    const convertChars = he.decode(text);
    const convertTags = convertChars.replace(/<p>/g, "\n\n");
    return parse(convertTags);
  };

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

  return (
    <div className="comment-chain-container">
      <div
        className="comment-container"
        onClick={() => {
          if (showChildren) {
            setShowChildren(!showChildren);
          }
        }}
      >
        <DepthBar depth={depth} />
        <div className="comment">
          <div className="comment-content">
            <p className="comment-text">{convertText(text)}</p>
            <div className="comment-info">
              <div className="comment-author-date">
                By
                <span>{` ${by} `}</span>
                {`${convertedTime} ago`}
              </div>
              <div className="comment-children-info">
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
            <div className="comment-children">{loadCommentCards}</div>
          ) : (
            <FillerCard
              type={FillerCardEnum.SHOW_CHILDREN}
              depth={depth}
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
