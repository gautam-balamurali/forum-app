/* eslint-disable */

import { BsDot, BsHeart, BsShare } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useForum } from "../../../core/contexts/ForumContext";
import PostCard from "../post-card/PostCard";
import { formatDate } from "../../../utils/dateFormat";
import "./IndividualPost.css";

const IndividualPost = ({ postId }) => {
  const navigate = useNavigate();
  const { forumData } = useForum();
  const postDetails = forumData.posts.find((post) => post.postId === postId);
  return (
    <div className="single-post-container">
      <h2 onClick={() => navigate("/")}>{"<- Post"}</h2>
      <PostCard postDetails={postDetails} />
      <div className="comments-section">
        {postDetails?.comments?.length > 0 &&
          postDetails.comments.map(
            ({ commentId, username, picUrl, likes, comment, createdAt }) => (
              <div key={commentId} className="comments-container">
                <div className="user-comment-details">
                  <img
                    className="user-comment-avatar"
                    src={picUrl}
                    alt={username}
                  />
                  <div className="user-comment-info">
                    <div className="user-comment-details">
                      <p className="user-info">
                        Posted by <span>@{username}</span>
                      </p>
                      <BsDot size={18} />
                      <p>{formatDate(createdAt)}</p>
                    </div>
                    <p className="user-info">
                      Replying to <span>@{postDetails.username}</span>
                    </p>
                  </div>
                </div>
                <p className="post-desc">{comment}</p>
                <div className="action-btns">
                  <button disabled>
                    <BsHeart size={18} />
                  </button>
                  <button disabled>
                    <FaRegCommentAlt size={18} />
                  </button>
                  <button disabled>
                    <BsShare size={18} />
                  </button>
                </div>
              </div>
            )
          )}
        {postDetails?.comments?.length < 1 && <p>No comments found.</p>}
      </div>
    </div>
  );
};

export default IndividualPost;
