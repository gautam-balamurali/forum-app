/* eslint-disable */

import {
  BsBookmark,
  BsBookmarkFill,
  BsDot,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsShare,
} from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { formatDate } from "../../../utils/dateFormat";
import { useForum } from "../../../core/contexts/ForumContext";

const PostCard = ({ postDetails }) => {
  const { handleUpvote, handleDownvote, handleBookmark } = useForum();
  const navigate = useNavigate();

  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
  } = postDetails;

  const addLineBreaks = (text) => {
    const sentences = text.split(".");
    const lastIndex = sentences.length - 1;

    return sentences.map((sentence, index) => (
      <span key={index}>
        {sentence.trim()}
        {index !== lastIndex && (
          <span>
            .<br />
          </span>
        )}
      </span>
    ));
  };

  return (
    <div className="forum-post-container">
      <div className="vote-section">
        <button className="upvote" onClick={() => handleUpvote(postId)}>
          <BsFillCaretUpFill size={54} />
        </button>
        <p className="vote-count">{upvotes - downvotes}</p>
        <button className="downvote" onClick={() => handleDownvote(postId)}>
          <BsFillCaretDownFill size={54} />
        </button>
      </div>
      <div className="post-section">
        <div className="user-details">
          <img className="user-avatar" src={picUrl} alt={name} />
          <p className="user-info">
            Posted by <span>@{username}</span>
          </p>
          <BsDot size={18} />
          <p>{formatDate(createdAt)}</p>
        </div>
        <h3 className="post-heading">{post}</h3>
        <div className="tags-section">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <p className="post-desc">{addLineBreaks(postDescription)}</p>
        <hr className="separator" />
        <div className="action-btns">
          <button onClick={() => navigate(`/post/${postId}`)}>
            <FaRegCommentAlt size={18} />
          </button>
          <button disabled>
            <BsShare size={18} />
          </button>
          <button onClick={() => handleBookmark(postId)}>
            {isBookmarked ? (
              <BsBookmarkFill size={18} />
            ) : (
              <BsBookmark size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
