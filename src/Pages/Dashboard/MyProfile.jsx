import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import useSingleUser from '../../Hooks/useSingleUser';
import { FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [posts, setPosts] = useState([]); // Initialize posts state
  const axiosPublic = useAxiosPublic();
  const [userData, userLoading, userError, userErrorMsg] = useSingleUser()
  const [formVisible, setFormVisible]=useState(false)
  const [aboutMe, setAboutMe] = useState("");
  const [tempAboutMe, setTempAboutMe] = useState(aboutMe);

  // Fetch user posts data
  const { data: postsData, isLoading: postsLoading, isError: postsError, error: postsErrorMsg } = useQuery({
    queryKey: ["userPosts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user-posts/${user?.email}`);
      // console.log(res.data);
      return res.data;
    },
    enabled: !!user?.email, // Only run the query if user email exists
  });

  // Update posts state when posts data is fetched
  useEffect(() => {
    if (postsData) {
      setPosts(postsData.slice(-3)); // Get only the last 3 posts
    }
  }, [postsData]);

  // Handle loading and error states
  if (userLoading || postsLoading) {
    return <div>Loading...</div>;
  }

  if (userError || postsError) {
    return <div>Error: {userErrorMsg || postsErrorMsg}</div>;
  }

  const handleEditBtn=()=>{
    setFormVisible(true)
  }
  const handleSave = (e) => {
    e.preventDefault();
    setAboutMe(tempAboutMe);
    setFormVisible(false);
  };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Card */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img referrerPolicy='no-referrer' src={userData?.photoURL} alt={userData?.displayName} />
            </div>
          </div>
          <h2 className="card-title text-2xl mt-4">{userData?.displayName}</h2>
          <p className="text-sm text-gray-500">{userData?.email}</p>
          <p
          className={`badge ${
            userData.badge === "Gold" ? "badge-warning text-black font-bold text-lg p-4" : "bg-amber-950 text-white font-bold text-lg p-4"
          }`}
          >{userData.badge}</p>
          {
            aboutMe === "" ? "":<div>
            <p className='text-sm'>{tempAboutMe}</p>
          </div>  
          }
          <button className='btn my-3 text-base btn-success text-white' onClick={handleEditBtn}>Edit <FaEdit /></button>
        </div>
      </div>
          {
            formVisible ?  <div className='my-6'>
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <form >
                  <textarea
                    value={tempAboutMe}
                    onChange={(e) => setTempAboutMe(e.target.value)}
                    className="textarea textarea-bordered w-full mb-4"
                    rows="5"
                    placeholder='Give Information About Yourself'
                  />
                  <div className="flex justify-end space-x-4">
                    <button type="button" onClick={() => setFormVisible(false)} className="btn btn-secondary btn-sm">
                      Cancel
                    </button>
                    <button onClick={handleSave} type="submit" className="btn btn-primary btn-sm">
                      Save
                    </button>
                  </div>
                </form>
            </div>
      : ""
          }
      {/* Recent Posts */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="grid gap-4">
          {
            posts.length > 0 ? <>
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
            </>  : <p className='text-2xl font-bold'>No Recent Posts Found</p>
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
