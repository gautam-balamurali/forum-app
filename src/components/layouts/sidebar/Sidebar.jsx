import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { BsBookmark, BsRocketFill } from "react-icons/bs";

import "./Sidebar.css";
import { useForum } from "../../../core/contexts/ForumContext";

const Sidebar = () => {
  const { forumData } = useForum();

  return (
    <div className="sidebar">
      <nav className="navigation">
        <li>
          <FaHome /> Home
        </li>
        <li>
          <BsRocketFill /> Explore
        </li>
        <li>
          <BsBookmark /> Bookmarks
        </li>
        <li>
          <FaRegUserCircle /> Profile
        </li>
      </nav>
      <div className="current-user-details">
        <img
          className="user-comment-avatar"
          src={forumData.picUrl}
          alt={forumData.username}
        />
        <div className="current-user-info">
          <h4>{forumData.name}</h4>
          <p>@{forumData.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
