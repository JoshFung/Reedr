import "./ReaderPost.css";
import { Icon } from "@iconify/react";

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
    <div className="post-container">
      <div className="post-main">
        <h2 className="post-title">{title}</h2>
        <div className="post-main-info-container">
          <div className="post-main-info">
            By
            <span className="post-main-info-author">{` ${author} `}</span>
            {time}
          </div>
          <div className="post-main-link">
            <Icon
              icon="mdi:link-variant"
              width="12"
              height="12"
              className="post-main-link-icon"
            />
            ( {domain})
          </div>
        </div>
      </div>
      {/* they will all be styled the same so maybe make all children the same
        class */}

      <hr className="post-divider" />
      <div className="post-bottom">
        <div className="post-bottom-info">
          <Icon
            icon="mdi:arrow-up-bold-outline"
            width="16"
            height="16"
            className="post-bottom-info-icon"
          />
          {points}
        </div>
        <div className="post-bottom-info">
          <Icon
            icon="mdi:comment-outline"
            width="16"
            height="16"
            className="post-bottom-info-icon"
          />
          {comments}
        </div>
        <div className="post-bottom-info">
          <Icon
            icon="mdi:share-outline"
            width="16"
            height="16"
            className="post-bottom-info-icon"
          />
          Share
        </div>
      </div>
    </div>
  );
};

export default ReaderPost;
