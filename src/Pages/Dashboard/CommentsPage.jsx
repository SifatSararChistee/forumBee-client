import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Modal from 'react-modal';
import './modal.css'
import useAxiosSecure from "../../Hooks/useAxiosSecure";

Modal.setAppElement('#root');

const CommentsPage = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { postId } = useParams();
  const [feedbackMap, setFeedbackMap] = useState({});
  const [reportedMap, setReportedMap] = useState({});
  const [reportData, setReportData] = useState([]);
  const [currentComment, setCurrentComment] = useState(null);

 // Load the comments
 const { data : comments, isLoading, isError, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comments/${postId}`);
      return res.data;
    },
    onSuccess: (data) => {
      // console.log("Data fetched:", data); 
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

  const handleFeedbackChange = (commentId, selectedFeedback) => {
    setFeedbackMap((prev) => ({
      ...prev,
      [commentId]: selectedFeedback,
    }));
  };

  const handleReport = (comment) => {
    const { _id, email, userName, text } = comment;  
    const latestReport = {
      commentId: _id,
      userEmail: email,
      userName: userName || "Anonymous", // Default to "Anonymous" if userName is not provided
      commentText: text,
      feedback: feedbackMap[_id],
      status:'pending',
    };
  
    // Add the report details to the reportData array
    setReportData((prev) => [
      ...prev,
      latestReport, // Using latestReport here
    ]);
  
    // Mark the comment as reported
    setReportedMap((prev) => ({
      ...prev,
      [_id]: true,
    }));
  
    // Send the latest report to the server
    axiosSecure
      .post(`/report/${_id}`, latestReport) // Send the report object to the server
      .then((response) => {
        if (response.data.insertedId) {
          // Show success if insertedId is valid (truthy)
          toast.success("Reported successfully!");
        } else {
          // Handle the case where insertedId is not available
          toast.error("Already Reported");
        }
      })
      .catch((error) => {
        console.error("Error adding report:", error);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

 // Function to open the modal with the full comment
 const handleModal = (comment) => {
  setCurrentComment(comment);
  setIsModalOpen(true);
};

// Function to close the modal
const closeModal = () => {
  setIsModalOpen(false);
  setCurrentComment(null);
};

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>
      <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">#</th>
          <th className="border border-gray-300 px-4 py-2">Email</th>
          <th className="border border-gray-300 px-4 py-2">Comment</th>
          <th className="border border-gray-300 px-4 py-2">Feedback</th>
          <th className="border border-gray-300 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {comments?.length > 0 ? (
          comments.map((comment, index) => (
            <tr key={comment._id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.email}</td>
              <td className="border border-gray-300 px-4 py-2">
        {/* Truncate the comment if it's longer than 20 characters */}
        {comment.text.length > 20 ? comment.text.substring(0, 20) + "..." : comment.text}

        {/* Display Read More link if the comment is too long */}
        {comment.text.length > 20 && (
          <span className="read-more text-blue-500 cursor-pointer" onClick={() => handleModal(comment)}>
            {" "}Read More
          </span>
        )}
      </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={feedbackMap[comment._id] || ""}
                  className="select select-bordered w-full max-w-xs"
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
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className={`btn btn-sm ${
                    reportedMap[comment._id] ? "btn-disabled" : "btn-error"
                  }`}
                  disabled={
                    reportedMap[comment._id] || !feedbackMap[comment._id]
                  }
                  onClick={() => handleReport(comment)}
                >
                  {reportedMap[comment._id] ? "Reported" : "Report"}
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-4">
              No comments available
            </td>
          </tr>
        )}
      </tbody>
    </table>
      </div>
       {/* Modal using react-modal */}
       {currentComment && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Full Comment"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <p>{currentComment.text}</p>
          <p className="flex justify-end"><button className="btn font-bold btn-error text-white" onClick={closeModal}> Close</button></p>

        </Modal>
      )}
    </div>
  );
};

export default CommentsPage;
``
