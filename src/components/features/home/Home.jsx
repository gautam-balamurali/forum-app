/* eslint-disable */

import { useForum } from "../../../core/contexts/ForumContext";
import "./Home.css";
import PostCard from "../post-card/PostCard";

const Home = () => {
  const { forumData } = useForum();

  return (
    <div className="forum-container">
      <h2>Latest Posts</h2>
      {forumData?.posts?.length > 0 &&
        forumData.posts.map((postDetails) => (
          <PostCard key={postDetails.postId} postDetails={postDetails} />
        ))}
      {forumData?.posts?.length < 1 && <h3>No posts found.</h3>}
    </div>
  );
};

export default Home;
