/* eslint-disable */

import IndividualPost from "../components/features/individual-post/IndividualPost";
import { useParams } from "react-router-dom";

const IndividualPostPage = () => {
  const { postId } = useParams();
  return <IndividualPost postId={postId} />;
};

export default IndividualPostPage;
