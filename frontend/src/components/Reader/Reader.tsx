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
import ReaderPost from "./ReaderPost/ReaderPost";
import Spinner from "../Spinner/Spinner";

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
      {commentsStatus !== StatusEnum.SUCCEEDED ? (
        <Spinner />
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
