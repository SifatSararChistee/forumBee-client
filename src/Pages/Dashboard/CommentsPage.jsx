import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";

const CommentsPage = () => {
  const axiosPublic = useAxiosPublic();
  const { postId } = useParams();

  // Local state to handle updates
  const [localComments, setLocalComments] = useState([]);

 // Load the comments
 const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/${postId}`);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Data fetched:", data); // Logs the fetched comments
      setLocalComments(data); // Sync the fetched data to local state
    },
    onError: (err) => {
      console.error("Error fetching comments:", err);
    },
  });

  const feedbackOptions = [
    "Irrelevant content",
    "Inappropriate language",
    "Spam or advertisement",
  ];

  // Handle feedback change
  const handleFeedbackChange = (_id, feedback) => {
    setLocalComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === _id ? { ...comment, feedback } : comment
      )
    );
  };

  // Handle report action
  const handleReport = (_id) => {
    setLocalComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === _id ? { ...comment, reported: true } : comment
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Comment</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {localComments.length > 0 ? (
              localComments.map((comment, index) => (
                <tr key={comment._id}>
                  <td>{index + 1}</td>
                  <td>{comment.email}</td>
                  <td>{comment.text}</td>
                  <td>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      value={comment.feedback || ""}
                      onChange={(e) =>
                        handleFeedbackChange(comment._id, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select feedback
                      </option>
                      {feedbackOptions.map((feedback, idx) => (
                        <option key={idx} value={feedback}>
                          {feedback}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        comment.reported ? "btn-disabled" : "btn-error"
                      }`}
                      disabled={comment.reported || !comment.feedback}
                      onClick={() => handleReport(comment._id)}
                    >
                      {comment.reported ? "Reported" : "Report"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No comments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommentsPage;
``
