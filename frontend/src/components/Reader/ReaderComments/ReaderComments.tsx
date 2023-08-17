import { useAppSelector } from "../../../redux/hooks";
import { selectCommentsArray } from "../../../redux/slices/post/postSlice";
import { FillerCardEnum } from "../../../utils/enums";
import CommentCard from "../../CommentCard/CommentCard";
import FillerCard from "../../FillerCard/FillerCard";
import "./ReaderComments.css";

const ReaderComments = () => {
  // const comments = useAppSelector(selectCommentsArray);

  // TODO: testing
  const comments = [
    {
      by: "sorenjan",
      id: 37151850,
      kids: [37152209, 37155003],
      parent: 37149349,
      text: 'Sixty Symbols released a video about this yesterday, and in it professor Philip Moriarty is less than impressed with the whole ordeal. I haven&#x27;t been paying attention, I&#x27;m too jaded and skeptical and assumed from the start that there was something wrong and much hype about nothing.<p>Bad Science and Room Temperature Superconductors - Sixty Symbols: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=zl-AgmoZ5mo">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=zl-AgmoZ5mo</a>',
      time: 1692211910,
      type: "comment",
    },
  ];

  const loadCommentCards = comments.map((comment) => {
    return <CommentCard key={comment.id} comment={comment} depth={0} />;
  });

  return (
    <>
      {comments.length === 0 ? (
        <FillerCard type={FillerCardEnum.NO_COMMENTS} />
      ) : (
        <div className="all-comments-container">{loadCommentCards}</div>
      )}
    </>
  );
};

export default ReaderComments;
