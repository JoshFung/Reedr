import { useState } from "react";
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
  const [copied, setCopied] = useState(false);

  let domain,
    copySourceStyle: React.CSSProperties = { cursor: "auto" };
  let copySourceText = "No source";
  let copySourceIcon = (
    <Icon
      icon="material-symbols:close-rounded"
      className="post-bottom-info-icon"
    />
  );

  if (url) {
    // Source: https://stackoverflow.com/a/8498629/16217105
    const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i); // eslint-disable-line
    domain = matches && matches[1];

    copySourceStyle = {};
    if (copied) {
      copySourceText = "Copied!";
      copySourceIcon = (
        <Icon icon="ic:round-check" className="post-bottom-info-icon copied" />
      );
      copySourceStyle = {
        color: "#61A5C2",
      };
    } else {
      copySourceText = "Source";
      copySourceIcon = (
        <Icon
          icon="material-symbols:content-copy-outline"
          className="post-bottom-info-icon"
        />
      );
    }
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
        {text && <p className="post-text">{parseText(text)}</p>}
        <div className="post-main-info-container">
          <div className="post-main-info">
            By
            <span className="post-main-info-author">{` ${by} `}</span>
            {`${convertedTime} ago`}
          </div>
          {url && (
            <div className="post-main-link">
              <Icon icon="mdi:link-variant" className="post-main-link-icon" />(
              {domain})
            </div>
          )}
        </div>
      </div>
      <hr className="post-divider" />
      <div className="post-bottom">
        <div className="post-bottom-info">
          <Icon
            icon="mdi:arrow-up-bold-outline"
            className="post-bottom-info-icon"
          />
          {score}
        </div>
        <div className="post-bottom-info">
          <Icon icon="mdi:comment-outline" className="post-bottom-info-icon" />
          {descendants ?? 0}
        </div>
        <div
          className="post-bottom-info"
          onClick={
            url
              ? () => {
                  navigator.clipboard.writeText(url);
                  setCopied(true);
                }
              : undefined
          }
          style={copySourceStyle}
        >
          {copySourceIcon}
          {copySourceText}
        </div>
      </div>
    </div>
  );
};

export default ReaderPost;
