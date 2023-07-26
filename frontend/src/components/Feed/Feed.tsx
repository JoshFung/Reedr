import { useAppSelector } from "../../redux/hooks";
import PostCard from "../PostCard/PostCard";

const Feed = () => {
  const postsArray = useAppSelector((state) => state.posts.postsArray);

  return (
    <div className="feedContainer">
      {postsArray.map((post) => {
        return <PostCard {...post} />;
      })}
    </div>
  );
};

export default Feed;
