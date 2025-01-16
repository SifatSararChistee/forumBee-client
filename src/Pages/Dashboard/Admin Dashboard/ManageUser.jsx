import React, { useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", isAdmin: false, subscriptionStatus: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", isAdmin: false, subscriptionStatus: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com", isAdmin: true, subscriptionStatus: "Active" }
  ]);

  const handleMakeAdmin = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isAdmin: !user.isAdmin } : user
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
            <th>Subscription Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className={`btn ${user.isAdmin ? "btn-success" : "btn-primary"}`}
                  onClick={() => handleMakeAdmin(user.id)}
                >
                  {user.isAdmin ? "Revoke Admin" : "Make Admin"}
                </button>
              </td>
              <td>{user.subscriptionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
