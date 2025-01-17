import React, { useState } from "react";
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ReportedComments = () => {
  const axiosSecure= useAxiosSecure()
  const { data: reports=[], refetch, isLoading, isError, error } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reports");
      return res.data;
    },
  });

  const handleStatusUpdate = async (_id, status) => {
    // Make a PATCH request to update the report status
      const res = await axiosSecure.patch(`/report/${_id}`, { status });
      if (res.data.modifiedCount > 0) {
        toast.success(`Comment ${status.charAt(0).toUpperCase() + status.slice(1)} Successfully`);
        refetch();
      }
    }
    
// Handle approve action
const handleApprove = (_id) => {
  handleStatusUpdate(_id, "approved");
};

// Handle resolved action
const handleResolved = (_id) => {
  handleStatusUpdate(_id, "action taken");
};

// Example usage for delete
const handleDelete = (_id) => {
  handleStatusUpdate(_id, "deleted");
};

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Reported Activities & Comments</h2>
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>User</th>
            <th>Comment</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.userName}</td>
              <td>{report.commentText}</td>
              <td>{report.feedback}</td>
              <td>{report.status}</td>
              <td className="space-y-2 text-center">
                <button
                  onClick={() => handleDelete(report._id)}
                  className="btn btn-error text-white w-[150px]"
                >
                  Delete Comment
                </button>
                <button
                  onClick={() => handleApprove(report._id)}
                  className="btn btn-warning  w-[150px]"
                >
                  Approve Comment
                </button>
                <button
                  onClick={() => handleResolved(report._id)}
                  className="btn btn-success text-white  w-[150px]"
                >
                  Mark as Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedComments;
