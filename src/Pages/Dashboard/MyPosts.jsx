import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const MyPosts = () => {
    const axiosPublic=useAxiosPublic()
    const {user} =useAuth()
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from server
    axiosPublic
      .get(`/user-posts/${user?.email}`) 
      .then((res) => {
        setPosts(res.data)
      })
      .catch((error) => {
        console.error("Error fetching post count:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Posts</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Post Title</th>
              <th>Votes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <tr key={post._id}>
                  <td>{index + 1}</td>
                  <td>{post.postTitle}</td>
                  <td>{post.upVote}</td>
                  <td>
                    <div className="flex gap-2">
                        <NavLink to={`/comments/${post._id}`}>
                        <button className="btn btn-sm btn-success text-white">
                        See Comments
                      </button>
                        </NavLink>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete Post
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No posts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPosts;
