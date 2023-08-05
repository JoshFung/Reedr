import "./Reader.css";
import ReaderComments from "./ReaderComments/ReaderComments";
import ReaderPost from "./ReaderPost/ReaderPost";

const Reader = () => {
  return (
    <div className="reader-container">
      <ReaderPost />
      <ReaderComments />
    </div>
  );
};

export default Reader;
