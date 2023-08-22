import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectSelectedPost } from "../../redux/slices/post/postSlice";
import { FillerCardEnum } from "../../utils/enums";
import Feed from "../Feed/Feed";
import FillerCard from "../FillerCard/FillerCard";
import Reader from "../Reader/Reader";
import "./ContentPage.css";

const ContentPage = () => {
  const selectedPost = useAppSelector(selectSelectedPost);

  // Return boolean based on whether it matches the media query
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    // Returns a media query object that let's use detect events to match
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Add event listener to media query object to listen for changes (to see if it matches)
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup function that ensures event listener is removed to prevent memory leaks
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="content-container">
      <div className="mobile-container">
        {isMobile && (selectedPost ? <Reader {...selectedPost} /> : <Feed />)}
      </div>
      <div className="web-container">
        {!isMobile && (
          <>
            <div className="feed-column">
              <Feed />
            </div>
            <div className="reader-column">
              {selectedPost ? (
                <Reader {...selectedPost} />
              ) : (
                <FillerCard type={FillerCardEnum.NO_SELECTED_POST} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
