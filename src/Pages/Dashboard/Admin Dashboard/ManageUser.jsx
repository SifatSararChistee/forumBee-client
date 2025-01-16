import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
  const axiosSecure =useAxiosSecure()
  const [users, setUsers] = useState([]);

    // Fetch all user data
    const { data: usersData, isLoading: userLoading, isError: userError, error: userErrorMsg } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users`);
        // console.log(res.data); 
        return res.data; 
      },
    });

      useEffect(() => {
        if (usersData) {
          setUsers(usersData);
        }
      }, [usersData]);


        // Handle loading and error states
  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (userError ) {
    return <div>Error: {userErrorMsg || postsErrorMsg}</div>;
  }

  const handleMakeAdmin = (_id) => {
    setUsers(users.map(user =>
      user._id === _id ? { ...user, admin: !user.admin } : user
    ));
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Make Admin</th>
            <th>MemberShip Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className={`btn ${user.admin ? "btn-success" : "btn-primary"}`}
                  onClick={() => handleMakeAdmin(user._id)}
                >
                  {user.admin ? "Revoke Admin" : "Make Admin"}
                </button>
              </td>
              <td>{user.badge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
