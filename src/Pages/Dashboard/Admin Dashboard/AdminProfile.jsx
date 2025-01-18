import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import useAuth from "../../../Hooks/useAuth"
import usePosts from "../../../Hooks/usePosts";
import useUsers from "../../../Hooks/useUsers";
import useComments from "../../../Hooks/useComments";
import useTags from "../../../Hooks/useTags";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const AdminProfile = () => {
  const axiosSecure=useAxiosSecure()
  const [newTag, setNewTag] = useState("");
  const [tags]=useTags()
  console.log(tags)
  const {user} = useAuth()
  const [postData] =usePosts()
  const [users] =useUsers()
  const [comments] =useComments()
  const adminProfile = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
    posts: postData.length,
    comments:comments.length,
    users: users.length,
  };

  // Pie chart data
  const pieChartData = {
    labels: ["Posts", "Comments", "Users"],
    datasets: [
      {
        label: "Site Stats",
        data: [adminProfile.posts, adminProfile.comments, adminProfile.users],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  const id='678793f88cb187b99f0ab1c7'
  console.log(id)

// Handle adding new tags
const handleAddTag = (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  if (!newTag || newTag.trim() === "") {
    return toast.error("Tag cannot be empty");
  }

  axiosSecure
    .post(`/add-tag/${id}`, { tag: newTag.trim() }) 
    .then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("Tag added successfully");
        setNewTag(""); 
      } else {
        toast.error("Failed to add tag");
      }
    })
    .catch((err) => {
      console.error(err);
      toast.error("An error occurred while adding the tag");
    });
};


  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Profile Section */}
      <div className="flex items-center space-x-6 mb-10">
        <img referrerPolicy="no-referrer" src={adminProfile.image} alt="Admin" className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-semibold">{adminProfile.name}</h2>
          <p className="text-gray-600">{adminProfile.email}</p>
          <div className="flex space-x-4 mt-2">
            <div>
              <p className="font-medium">Posts</p>
              <p>{adminProfile.posts}</p>
            </div>
            <div>
              <p className="font-medium">Comments</p>
              <p>{adminProfile.comments}</p>
            </div>
            <div>
              <p className="font-medium">Users</p>
              <p>{adminProfile.users}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="mb-10 h-96">
        <h3 className="text-xl font-semibold mb-4">Site Statistics</h3>
        <Pie data={pieChartData} />
      </div>

      {/* Add Tag Form */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Add Tags</h3>
        <form onSubmit={handleAddTag} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Enter a tag"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>

        {/* Tags Dropdown */}
        {/* <div className="mt-4">
          <label className="block font-medium">Tags</label>
          <select className="select select-bordered w-full mt-2">
            {tags.length > 0 ? (
              tags.map((tag, index) => <option key={index}>{tag}</option>)
            ) : (
              <option>No tags added yet</option>
            )}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default AdminProfile;
