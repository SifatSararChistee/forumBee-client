import React from "react";

const PostCard = ({post}) => {
    const {authorName, authorImg, postTitle, tags, time, comments, upVotes, downVotes}=post
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
  return (
    <div className="w-full h-48">
      <div className="flex border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden h-full">
        {/* Votes Section */}
        <div className="flex flex-col items-center justify-center bg-gray-100 p-3">
          <button className="text-gray-500 hover:text-red-500">
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
          <button className="text-gray-500 hover:text-blue-500">
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
              className="w-10 h-10 rounded-full"
              src={authorImg}
              alt="Author"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold">{authorName}</p>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
          {/* Post Title */}
          <h2 className="text-lg font-bold text-gray-800 hover:underline">
            <a href="#">{postTitle}</a>
          </h2>
          {/* Tags */}
          <div className="flex flex-wrap mt-2 mb-4">
          {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${tagColors[tag] || "bg-gray-100 text-gray-800"}`}
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* Comments & UpVotes */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>💬 {comments} Comments</span>
            <span>⬆️ {upVotes} Votes</span>
            <span>⬆️ {downVotes} Down Votes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
