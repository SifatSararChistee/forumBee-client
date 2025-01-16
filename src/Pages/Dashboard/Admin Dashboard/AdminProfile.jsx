import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const AdminProfile = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  // Example profile data
  const adminProfile = {
    name: "Admin Name",
    email: "admin@example.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    posts: 1200,
    comments: 3000,
    users: 5000,
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

  // Handle adding new tags
  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Profile Section */}
      <div className="flex items-center space-x-6 mb-10">
        <img src={adminProfile.image} alt="Admin" className="w-20 h-20 rounded-full object-cover" />
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
      <div className="mb-10">
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
        <div className="mt-4">
          <label className="block font-medium">Tags</label>
          <select className="select select-bordered w-full mt-2">
            {tags.length > 0 ? (
              tags.map((tag, index) => <option key={index}>{tag}</option>)
            ) : (
              <option>No tags added yet</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
