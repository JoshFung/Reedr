import { BarColourEnum } from "../../utils/enums";
import "./DepthBar.css";

interface DepthBarProps {
  depth: number;
}

const DepthBar = (props: DepthBarProps) => {
  const { depth } = props;

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
    <div className="depth-bar-container" style={indentStyle}>
      <div className="depth-bar" style={barColourStyle}></div>
    </div>
  );
};

export default DepthBar;
