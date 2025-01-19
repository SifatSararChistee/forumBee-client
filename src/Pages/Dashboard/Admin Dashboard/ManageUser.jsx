import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useUsers from "../../../Hooks/useUsers";
import useAllUsers from "../../../Hooks/useAllUsers";

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
  const [currentPage, setCurrentPage] = useState(0);
  const UsersPerPage = 10;
  const [allUsers] =useAllUsers()

  const [users, refetch, isLoading, isError, error] = useUsers(debouncedSearch, currentPage, UsersPerPage);
  const pages = [...Array(Math.ceil(allUsers.length / UsersPerPage)).keys()];  

  // Debounced handler for search input
  const debouncedSetSearch = debounce((value) => {
    setDebouncedSearch(value);
  }, 300);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    debouncedSetSearch(e.target.value); 
  };


  // Handle "Make Admin" action
  const handleMakeAdmin = async (_id) => {
    try {
      const res = await axiosSecure.patch(`/users/admin/${_id}`);
      if (res.data.modifiedCount > 0) {
        toast.success("User status updated to Admin")
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
              <div className="flex items-center justify-between">
                <p className="text-base font-medium">Showing 1-10 of {allUsers.length} Users</p>
                <div className="join my-5">
                {
            pages.map(page =><button key={page} 
              className={`btn join-item ${currentPage === page ? 'btn-active' : ''}`}
              onClick={()=> setCurrentPage(page)}>{page}</button>)
          }
                </div>
        </div>
    </div>
  );
};

export default ManageUser;
