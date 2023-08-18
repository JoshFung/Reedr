import { parseText, timeDifference } from "../../../utils/helpers";
import "./ReaderPost.css";
import { Icon } from "@iconify/react";

export interface PostProps {
  title: string;
  by: string;
  time: number;
  url?: string;
  text?: string;
  score: number;
  descendants?: number;
}

const ReaderPost = (props: PostProps) => {
  const { title, by, time, url, score, text, descendants } = props;
  const convertedTime = timeDifference(time, true);

  let domain, convertedText;

  if (url) {
    // Source: https://stackoverflow.com/a/8498629/16217105
    const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    domain = matches && matches[1];
  }

  if (text) {
    convertedText = parseText(text);
  }

  const openLink = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="post-container">
      <div className="post-main" onClick={() => openLink(url)}>
        <h2 className="post-title">{title}</h2>
        {convertedText && <p className="post-text">{convertedText}</p>}
        <div className="post-main-info-container">
          <div className="post-main-info">
            By
            <span className="post-main-info-author">{` ${by} `}</span>
            {`${convertedTime} ago`}
          </div>
          {url && (
            <div className="post-main-link">
              <Icon
                icon="mdi:link-variant"
                width="12"
                height="12"
                className="post-main-link-icon"
              />
              ({domain})
            </div>
          )}
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
          {score}
        </div>
        <div className="post-bottom-info">
          <Icon
            icon="mdi:comment-outline"
            width="16"
            height="16"
            className="post-bottom-info-icon"
          />
          {descendants ?? 0}
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
