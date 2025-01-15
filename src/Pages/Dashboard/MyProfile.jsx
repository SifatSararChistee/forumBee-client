import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth'

const MyProfile = () => {
    const {user}= useAuth();
    // const axiosPublic = useAxiosPublic()
    // const { data: users=[], refetch, isLoading, isError, error } = useQuery({
    //     queryKey: ["user"],
    //     queryFn: async () => {
    //       const res = await axiosPublic.get("/users");
    //       return res.data;
    //     },
    //   });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img referrerPolicy='no-referrer' src={user?.photoURL} alt={user?.displayName} />
            </div>
          </div>
          <h2 className="card-title text-2xl mt-4">{user?.displayName}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
          {/* Badges */}
          {/* <div className="flex flex-wrap gap-2 mt-3">
  {user2.badges.map((badge, index) => (
    <span
      key={index}
      className={`badge ${
        badge === 'Bronze'
          ? 'bg-amber-700 text-white'
          : badge === 'Gold'
          ? 'bg-yellow-400 text-black'
          : 'badge-primary badge-outline'
      }`}
    >
      {badge}
    </span>
  ))}
</div> */}
        </div>
      </div>

      {/* Recent Posts */}
      {/* <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="grid gap-4">
          {user.recentPosts.map((post) => (
            <div
              key={post.id}
              className="card w-full bg-base-200 shadow-md"
            >
              <div className="card-body">
                <h4 className="card-title text-lg">{post.title}</h4>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="text-sm">{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default MyProfile;
