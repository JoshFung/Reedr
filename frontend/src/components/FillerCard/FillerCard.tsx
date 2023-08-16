import { BarColourEnum, FillerCardEnum } from "../../utils/enums";
import "./FillerCard.css";

interface FillerCardProps {
  type: FillerCardEnum;
  message?: string;
  depth?: number;
}

const FillerCard = (props: FillerCardProps) => {
  const { type, message, depth } = props;

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

      const colourMapping: { [key in BarColourEnum]: string } = {
        [BarColourEnum.RED]: "#F94144",
        [BarColourEnum.ORANGE]: "#F8961E",
        [BarColourEnum.YELLOW]: "#F9C74F",
        [BarColourEnum.GREEN]: "#90BE6D",
        [BarColourEnum.TEAL]: "#43AA8B",
        [BarColourEnum.BLUE]: "#577590",
      };

      const colourClass: BarColourEnum = depth % 6;

      const indentStyle: React.CSSProperties = {
        paddingLeft: `${depth * 0.75}rem`,
      };

      const barColourStyle: React.CSSProperties = {
        backgroundColor: colourMapping[colourClass],
      };

      return (
        <div className="show-children-container">
          <div className="depth-bar-container" style={indentStyle}>
            <div className="depth-bar" style={barColourStyle}></div>
          </div>
          <h4 className="show-children-text">{message}</h4>
        </div>
      );

    default:
      return null;
  }
};

export default FillerCard;
