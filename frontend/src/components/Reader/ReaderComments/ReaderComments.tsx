import { useAppSelector } from "../../../redux/hooks";
import { selectCommentsArray } from "../../../redux/slices/post/postSlice";
import { FillerCardEnum } from "../../../utils/enums";
import CommentCard from "../../CommentCard/CommentCard";
import FillerCard from "../../FillerCard/FillerCard";
import "./ReaderComments.css";

const ReaderComments = () => {
  const comments = useAppSelector(selectCommentsArray);

  const renderCommentCards = comments.map((comment) => {
    return <CommentCard key={comment.id} {...comment} />;
  });

  return (
    // <div className="comment-chain">
    //   {
    //     // TODO: fill in the null with comment component that says there are no comments
    //     comments.length === 0 ? (
    //       <FillerCard type={FillerCardEnum.NO_COMMENTS} />
    //     ) : (
    //       renderCommentCards
    //     )
    //   }
    // </div>
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
