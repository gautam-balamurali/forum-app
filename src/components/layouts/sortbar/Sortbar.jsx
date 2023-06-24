/* eslint-disable */

import { useForum } from "../../../core/contexts/ForumContext";
import "./Sortbar.css";

const Sortbar = () => {
  const { sortByDateCreated, sortByUpvotes } = useForum();
  return (
    <div className="sort-page">
      <h2>Sort By</h2>
      <div className="sorting-options">
        <button onClick={sortByDateCreated}>Latest</button>
        <button onClick={sortByUpvotes}>Upvotes</button>
      </div>
    </div>
  );
};

export default Sortbar;
