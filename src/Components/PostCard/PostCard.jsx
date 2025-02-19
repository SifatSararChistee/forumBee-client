import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const PostCard = ({post}) => {
    const {_id,authorName, authorImg, postTitle, tags, time, comments, upVotes, downVotes}=post
    const {user}= useAuth()
        const [upVotesCount, setUpVotesCount] = useState(upVotes);
        const [downVotesCount, setDownVotesCount] = useState(downVotes);
      
        const handleUpvote = () => {
          if (!user) return toast.error('You need to log in to vote!');
          setUpVotesCount(upVotes + 1);
        };
      
    
        const handleDownvote = () => {
          if (!user) return toast.error('You need to log in to vote!');
          setDownVotesCount(downVotes + 1);
        };
      


    const tagColors = {
        React: "bg-blue-100 text-blue-800",
        "Node.js": "bg-green-100 text-green-800",
        "Web Development": "bg-yellow-100 text-yellow-800",
        TailwindCSS: "bg-teal-100 text-teal-800",
        CSS: "bg-indigo-100 text-indigo-800",
        Design: "bg-purple-100 text-purple-800",
        Security: "bg-red-100 text-red-800",
        DevOps: "bg-orange-100 text-orange-800",
        AI: "bg-orange-100 text-orange-800",
      };
      const convertToActualTime = (isoDate) => {
        const date = new Date(isoDate);
        
        // Custom formatting
        return date.toLocaleString('en-US', {
          weekday: 'long', // "Monday"
          year: 'numeric', // "2025"
          month: 'long', // "January"
          day: 'numeric', // "9"
          hour: 'numeric', // "4"
          minute: 'numeric', // "20"
          second: 'numeric', // "00"
          hour12: true, // AM/PM
        });
      };
  return (
    <div className="w-full hover:shadow-2xl transition-transform transform hover:scale-105">
      <div className="flex border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden h-full">
        {/* Votes Section */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-3">
          <button onClick={handleUpvote} className="text-gray-500 hover:text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
          <span className="font-medium text-gray-700 my-1">{upVotes}</span>
          <button onClick={handleDownvote} className="text-gray-500 hover:text-blue-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-grow p-4">
          {/* Author Info */}
          <div className="flex items-center mb-2">
            <img
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full"
              src={authorImg}
              alt="Author"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold">{authorName}</p>
              <p className="text-xs text-gray-500">{convertToActualTime(time)}</p>
            </div>
          </div>
          {/* Post Title */}
          <h2 className="text-lg font-bold text-gray-800 hover:underline">
            <NavLink to={`/posts/${_id}`}>{postTitle}</NavLink>
          </h2>
          {/* Tags */}
          <div className="flex flex-wrap mt-2 mb-4">
          {tags?.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${tagColors[tag] || "bg-gray-100 text-gray-800"}`}
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* Comments & UpVotes */}
          <div className="flex items-center justify-between text-sm text-gray-500 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-all">
  <span className="font-semibold text-gray-700 flex items-center space-x-2">
    <span>⬆️</span>
    <span className="text-green-600">{upVotes}</span>
  </span>
  <span className="flex items-center space-x-2 text-gray-600">
    <span>⬇️</span>
    <span className="">{downVotes}</span>
  </span>
  <span className="flex items-center space-x-2 ">
    <span>💬</span>
    <span>{comments}</span>
    <span>Comments</span>
  </span>
</div>

<div className="mt-4 flex justify-end">
          <NavLink to={`/posts/${_id}`} className="btn-success btn text-white btn-sm" > See More</NavLink>
            </div>


        </div>
      </div>
    </div>
  );
};

export default PostCard;
