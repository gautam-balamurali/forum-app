/* eslint-disable */

import { useForum } from "../../../core/contexts/ForumContext";
import "./Sortbar.css";

const Sortbar = () => {
  const { sortByDateCreated, sortByUpvotes } = useForum();
  return (
    <div className="sort-page">
      <h2>Sort By</h2>
      <div className="sorting-options">
        <button onClick={sortByDateCreated}>Sort by Date Created</button>
        <button onClick={sortByUpvotes}>Sort by Upvotes</button>
      </div>
    </div>
  );
};

export default Sortbar;
