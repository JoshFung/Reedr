import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  return (
    <div className="contentContainer">
      <Feed />
      <Reader />
    </div>
  );
};

export default ContentPage;
