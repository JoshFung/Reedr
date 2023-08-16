import { useAppSelector } from "../../../redux/hooks";
import { selectCommentsArray } from "../../../redux/slices/post/postSlice";
import CommentCard from "../../CommentCard/CommentCard";
import "./ReaderComments.css";

// TODO: replace temp data
const tempData = {
  by: "zw123456",
  id: 36829903,
  kids: [
    36830511, 36831119, 36830332, 36830718, 36833050, 36830023, 36830814,
    36832851, 36836395, 36830831, 36831389,
  ],
  parent: 36828811,
  text: 'Hi there, old person here. Tomorrow is my 65th birthday. I had vowed to myself that I would completely and totally retire, Finally, at 65. But then, this "thing" cropped up and the day after tomorrow, I am pitching my 3rd startup to investors. I wonder, am I crazy. But I feel passion for this project. So, I am throwing myself into the fray again, there is no logical reason to do so. So, Rudy, I understand.',
  time: 1690059729,
  type: "comment",
};

const ReaderComments = () => {
  const comments = useAppSelector(selectCommentsArray);

  const renderCommentCards = comments.map((comment) => {
    return <CommentCard key={comment.id} {...comment} />;
  });

  return (
    <div className="comment-chain">
      {
        // TODO: fill in the null with comment component that says there are no comments
        comments.length === 0 ? null : renderCommentCards
      }
    </div>
  );
};

export default ReaderComments;
