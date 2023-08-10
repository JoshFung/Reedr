import Feed from "../Feed/Feed";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  return (
    <div className="contentContainer" id="topContentContainer">
      {/* TODO: uncomment after developing Reader */}
      <Feed />
      {/* <Reader /> */}
    </div>
  );
};

export default ContentPage;
