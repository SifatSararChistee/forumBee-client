import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounced handler for search input
  const debouncedSetSearch = debounce((value) => {
    setDebouncedSearch(value);
  }, 300);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value); 
  };

  // Fetch user data based on debounced search input
  const { data: users = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users", debouncedSearch],
    queryFn: async () => {
      if (debouncedSearch === "") {
        // Fetch all users if no search query
        const res = await axiosSecure.get("/users");
        return res.data;
      }
      // Fetch users based on search query
      const res = await axiosSecure.get(`/users?search=${debouncedSearch}`);
      return res.data;
    },
    enabled: true, // Always enabled to ensure it fetches data
  });

  // Handle "Make Admin" action
  const handleMakeAdmin = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/users/admin/${_id}`);
      if (res.data.modifiedCount > 0) {
        refetch(); 
      }
    } catch (error) {
      console.error("Error updating admin status:", error);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      <div className="w-1/2 mx-auto">
        <form className="flex items-center gap-2 my-4 mx-auto">
          <input
            type="text"
            placeholder="Search for user"
            value={search}
            aria-label="Search for user"
            onChange={handleSearchChange} 
            className="w-full p-2 border-2 border-green-400 rounded focus:outline-none focus:border-black"
          />
        </form>
      </div>
      {isLoading ? (
        <p>Loading users...</p>
      ) : isError ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Membership Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className={`btn ${
                      user.admin
                        ? "btn-disabled text-xl"
                        : "btn-success text-white"
                    }`}
                    disabled={user.admin}
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    {user.admin ? "Admin" : "Make Admin"}
                  </button>
                </td>
                <td
                  className={`badge ${
                    user.badge === "Gold"
                      ? "badge-warning text-black font-bold text-lg p-4"
                      : "bg-amber-950 text-white font-bold text-lg p-4"
                  }`}
                >
                  {user.badge}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUser;
