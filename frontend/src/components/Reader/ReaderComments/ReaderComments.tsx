import { useAppSelector } from "../../../redux/hooks";
import { selectCommentsArray } from "../../../redux/slices/post/postSlice";
import { FillerCardEnum } from "../../../utils/enums";
import CommentCard from "../../CommentCard/CommentCard";
import FillerCard from "../../FillerCard/FillerCard";
import "./ReaderComments.css";

const ReaderComments = () => {
  const comments = useAppSelector(selectCommentsArray);

  const renderCommentCards = comments.map((comment) => {
    return <CommentCard key={comment.id} comment={comment} depth={0} />;
  });

  return (
    <>
      {comments.length === 0 ? (
        <FillerCard type={FillerCardEnum.NO_COMMENTS} />
      ) : (
        <div className="comment-chain">{renderCommentCards}</div>
      )}
    </>
  );
};

export default ReaderComments;
