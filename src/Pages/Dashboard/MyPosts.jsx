import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyPosts = () => {
    const axiosPublic=useAxiosPublic()
    const {user} =useAuth()
    const { data: posts=[], refetch, isLoading, isError, error } = useQuery({
      queryKey: ["userPosts"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/user-posts/${user?.email}`);
        return res.data;
      },
    });

  const handleDelete = (id) => {
    // console.log(id)
    axiosPublic
        .delete(`/user-posts/${id}`) 
        .then((res) => {
          if(res.data.deletedCount){
            toast.success("Post Deleted Successfully")
            refetch()
          }
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
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
