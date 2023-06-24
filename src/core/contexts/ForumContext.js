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
  };

  const sortByDateCreated = () => {
    setForumDataDetails((prev) => {
      const sortedPosts = [...prev.forumData.posts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return {
        ...prev,
        forumData: {
          ...prev.forumData,
          posts: sortedPosts,
        },
      };
    });
  };

  const sortByUpvotes = () => {
    setForumDataDetails((prev) => {
      const sortedPosts = [...prev.forumData.posts].sort((a, b) => {
        return b.upvotes - a.upvotes;
      });

      return {
        ...prev,
        forumData: {
          ...prev.forumData,
          posts: sortedPosts,
        },
      };
    });
  };

  return (
    <ForumContext.Provider
      value={{
        ...forumDataDetails,
        handleUpvote,
        handleDownvote,
        handleBookmark,
        sortByDateCreated,
        sortByUpvotes,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => useContext(ForumContext);
