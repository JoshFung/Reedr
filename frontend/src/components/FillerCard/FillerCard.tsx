import { BarColourEnum, FillerCardEnum } from "../../utils/enums";
import DepthBar from "../DepthBar/DepthBar";
import "./FillerCard.css";

interface FillerCardProps {
  type: FillerCardEnum;
  message?: string;
  depth?: number;
  onClick?: () => void;
}

const FillerCard = (props: FillerCardProps) => {
  const { type, message, depth, onClick } = props;

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

    case FillerCardEnum.SHOW_CHILDREN:
      if (depth === undefined) {
        return null;
      }

      return (
        <div className="show-children-container" onClick={onClick}>
          <DepthBar depth={depth} />
          <h4 className="show-children-text">{message}</h4>
        </div>
      );

    default:
      return null;
  }
};

export default FillerCard;
