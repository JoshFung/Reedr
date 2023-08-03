import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  return (
    <div className="contentContainer" id="topContentContainer">
      <Feed />
      <Reader />
    </div>
  );
};

export default ContentPage;
