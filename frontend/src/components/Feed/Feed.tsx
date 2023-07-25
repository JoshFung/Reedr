import { useAppSelector } from "../../redux/hooks";
import PostCard from "../PostCard/PostCard";

const Feed = () => {
  const postsArray = useAppSelector((state) => state.posts.postsArray);

  return (
    <div className="feedContainer">
      <PostCard {...postsArray[3]} />
    </div>
  );
};

export default Feed;
