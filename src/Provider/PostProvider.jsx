import React, { createContext, useState, useContext } from "react";

// Create Context
export const PostsContext = createContext();

// Provider Component
const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;