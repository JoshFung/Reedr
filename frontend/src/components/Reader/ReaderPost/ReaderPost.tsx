import "./ReaderPost.css";

const ReaderPost = () => {
  // dummy vars
  const title =
    "A Caltech Nobel laureate celebrates his 100th birthday, then gets back to work";
  const author = "pseudolus";
  const time = "11 hours ago";
  const domain = "theguardian.com";
  const points = 277;
  const comments = 122;

  return (
    <div className="reader-container">
      <div className="post-container">
        <div className="post-main">
          <h2 className="post-title">{title}</h2>
          <div className="post-main-info-container">
            <div className="post-main-info">
              By {author} {time}
            </div>
            <div className="post-main-link">{domain}</div>
          </div>
        </div>
        {/* they will all be styled the same so maybe make all children the same
        class */}
        <div className="post-bottom">
          <div className="post-bottom-likes">{points}</div>
          <div className="post-bottom-comments">{comments}</div>
          <div className="post-bottom-share">Share</div>
        </div>
      </div>
      <div className="comment-container"></div>
    </div>
  );
};

export default ReaderPost;
