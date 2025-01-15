import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const MyProfile = () => {
    const axiosPublic = useAxiosPublic()
        const [posts, setPosts] = useState([]);
    const { data: user=[], refetch, isLoading, isError, error } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const res = await axiosPublic.get("/users");
          return res.data;
        },
      });

        useEffect(() => {
          // Fetch posts from server
          axiosPublic
            .get(`/user-posts/${user[0]?.email}`) 
            .then((res) => {
              setPosts(res.data.slice(-3))
            })
            .catch((error) => {
              console.error("Error fetching post count:", error);
            });
        }, []);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img referrerPolicy='no-referrer' src={user[0]?.photoURL} alt={user[0]?.displayName} />
            </div>
          </div>
          <h2 className="card-title text-2xl mt-4">{user[0]?.displayName}</h2>
          <p className="text-sm text-gray-500">{user[0]?.email}</p>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-3">
    {user[0]?.badge && (
      <span
        className={`badge ${
          user[0].badge === "Gold" ? "badge-warning text-black font-bold text-lg p-4" : "bg-amber-950 text-white font-bold text-lg p-4"
        }`}
      >
        {user[0].badge}
      </span>
    )}
  </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="grid gap-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="card w-full bg-base-200 shadow-md"
            >
              <div className="card-body">
                <h4 className="card-title text-lg">{post.postTitle}</h4>
                <p className="text-sm text-gray-600">{post.time}</p>
                <p className="text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
