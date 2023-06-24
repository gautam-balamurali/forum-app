/* eslint-disable */

import { createContext, useContext, useEffect, useState } from "react";
import { forumData } from "../db/forumData";
import { toast } from "react-toastify";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forumDataDetails, setForumDataDetails] = useState({
    forumData: null,
  });

  useEffect(() => {
    setForumDataDetails((prev) => ({ ...prev, forumData: forumData }));
  }, []);

  const handleUpvote = (postId) => {
    setForumDataDetails((prev) => ({
      ...prev,
      forumData: {
        ...prev.forumData,
        posts: prev.forumData.posts.map((post) =>
          post.postId === postId
            ? {
                ...post,
                upvotes: post.upvotes + 1,
              }
            : post
        ),
      },
    }));
    toast.success("Post upvoted!");
  };

  const handleDownvote = (postId) => {
    setForumDataDetails((prev) => ({
      ...prev,
      forumData: {
        ...prev.forumData,
        posts: prev.forumData.posts.map((post) =>
          post.postId === postId
            ? {
                ...post,
                downvotes: post.downvotes + 1,
              }
            : post
        ),
      },
    }));
    toast.success("Post downvoted!");
  };

  const handleBookmark = (postId) => {
    setForumDataDetails((prev) => ({
      ...prev,
      forumData: {
        ...prev.forumData,
        posts: prev.forumData.posts.map((post) =>
          post.postId === postId
            ? {
                ...post,
                isBookmarked: !post.isBookmarked,
              }
            : post
        ),
      },
    }));
    toast.success("Post bookmarked!");
  };

  return (
    <ForumContext.Provider
      value={{
        ...forumDataDetails,
        handleUpvote,
        handleDownvote,
        handleBookmark,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
