import { FillerCardEnum } from "../../utils/enums";
import "./FillerCard.css";

interface FillerCardProps {
  type: FillerCardEnum;
  message?: string;
}

const FillerCard = (props: FillerCardProps) => {
  const { type, message } = props;

  switch (type) {
    case FillerCardEnum.BOTTOM_MESSAGE:
      return (
        <div className="bottom-message-container">
          <h1 className="bottom-message-text">{message}</h1>
        </div>
      );

    case FillerCardEnum.NO_COMMENTS:
      return (
        <div className="no-comments-container">
          <h1 className="no-comments-text">{"No comments yet! :("}</h1>
        </div>
      );

    // default:
  }
};

export default FillerCard;
