import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  Post,
  fetchComments,
  selectCommentsStatus,
  selectSelectedPost,
} from "../../redux/slices/post/postSlice";
import { StatusEnum } from "../../utils/enums";
import "./Reader.css";
import ReaderComments from "./ReaderComments/ReaderComments";
import ReaderPost from "./ReaderPost/ReaderPost";
import Spinner from "../Spinner/Spinner";

const Reader = (props: Post) => {
  const commentsStatus = useAppSelector(selectCommentsStatus);
  const selectedPost = useAppSelector(selectSelectedPost);
  const dispatch = useAppDispatch();
  let readerStyles: React.CSSProperties;

  if (selectedPost) {
    readerStyles = {};
  } else {
    readerStyles = {};
  }

  useEffect(() => {
    if (commentsStatus === StatusEnum.IDLE) {
      dispatch(fetchComments());
    }
  }, [commentsStatus, dispatch]);

  return (
    <div className="reader-container">
      {commentsStatus !== StatusEnum.SUCCEEDED ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <div className="reader-content">
          <ReaderPost {...props} />
          <ReaderComments />
        </div>
      )}
    </div>
  );
};

export default Reader;
