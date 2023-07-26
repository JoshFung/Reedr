import { useAppSelector } from "../../redux/hooks";
import { selectAllPosts } from "../../redux/slices/posts/postsSlice";
import PostCard from "../PostCard/PostCard";

const Feed = () => {
  const postsArray = useAppSelector(selectAllPosts);

  const renderPostCards = postsArray.map((post) => {
    return <PostCard {...post} />;
  });

  return <div className="feedContainer">{renderPostCards}</div>;
};

export default Feed;
