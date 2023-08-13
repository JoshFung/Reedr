import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Post,
  fetchComments,
  selectCommentsStatus,
} from "../../redux/slices/post/postSlice";
import { StatusEnum } from "../../utils/enums";
import "./Reader.css";
import ReaderComments from "./ReaderComments/ReaderComments";
import ReaderPost, { PostProps } from "./ReaderPost/ReaderPost";

const Reader = (props: Post) => {
  const commentsStatus = useAppSelector(selectCommentsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (commentsStatus === StatusEnum.IDLE) {
      dispatch(fetchComments());
    }
  }, [commentsStatus, dispatch]);

  return (
    <div className="reader-container">
      <ReaderPost {...props} />
      <ReaderComments />
    </div>
  );
};

export default Reader;
