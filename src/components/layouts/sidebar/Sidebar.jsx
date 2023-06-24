import { FaHome, FaRegUserCircle } from "react-icons/fa";
import "./Sidebar.css";
import { BsBookmark, BsRocketFill } from "react-icons/bs";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
