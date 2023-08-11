import { Post } from "../../redux/slices/post/postSlice";
import "./Reader.css";
import ReaderComments from "./ReaderComments/ReaderComments";
import ReaderPost, { PostProps } from "./ReaderPost/ReaderPost";

const Reader = (props: Post) => {
  return (
    <div className="reader-container">
      <ReaderPost {...props} />
      <ReaderComments />
    </div>
  );
};

export default Reader;
