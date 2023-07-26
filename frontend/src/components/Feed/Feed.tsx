import { useAppSelector } from "../../redux/hooks";
import PostCard from "../PostCard/PostCard";

const Feed = () => {
  const postsArray = useAppSelector((state) => state.posts.postsArray);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return <div className="feedContainer">{renderPostCards}</div>;
};

export default Feed;
