import React, { useEffect, useState } from 'react';
import { FaRegThumbsDown, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import {FacebookShareCount, FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon, WhatsappShareButton, WhatsappIcon} from "react-share";

const PostDetailsPage = () => {
    const postData= useLoaderData()
    const navigate =useNavigate()
    const {user}= useAuth()
    const {_id,authorName, authorImg, postTitle, tags, time, comments, upVotes, downVotes,description}=postData

    // const [upVotes, setUpVotes] = useState(upVotes);
    // const [downVotes, setDownVotes] = useState(downVotes);
    const [newComment, setNewComment] = useState('');
    // const history = useHistory(); // To redirect users to login

    const handleUpvote = () => {
    //   if (!isLoggedIn) return alert('You need to log in to vote!');
    //   setUpVotes(upVotes + 1);
    };
  

    const handleDownvote = () => {
    //   if (!isLoggedIn) return alert('You need to log in to vote!');
    //   setDownVotes(downVotes + 1);
    };
  
    const handleShare = () => {
      alert('Post shared!');
      // You can implement sharing functionality here, such as sharing to social media or copying the link
    };
  
    // Handle comment submission
    const handleCommentSubmit = () => {
      if (!user) {
        navigate('/login')
        return;
      }
      if (newComment.trim()) {
        alert('Comment submitted!');
        // In a real app, you would send the new comment to your backend
      } else {
        alert('Please write a comment before submitting.');
      }
    };
  

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Post Details */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          {/* Author Section */}
          <div className="flex items-center space-x-4">
            <img
              src={authorImg}
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{authorName}</p>
              <p className="text-sm text-gray-500">{time}</p>
            </div>
          </div>
  
          {/* Post Title */}
          <h1 className="text-3xl font-bold">{postTitle}</h1>
  
          {/* Post Description */}
          <p className="text-gray-700">{description}</p>
  
          {/* Tags */}
          <div className="space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
  
          {/* Voting Section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleUpvote}
              className="text-blue-500 hover:text-blue-600"
            >
              <FaRegThumbsUp size={24} />
            </button>
            <span>{upVotes}</span>
            <button
              onClick={handleDownvote}
              className="text-red-500 hover:text-red-600"
            >
              <FaRegThumbsDown size={24} />
            </button>
            <span>{downVotes}</span>
          </div>
  
          {/* Share Button */}
          <div className='flex items-center gap-5'>
          <div >
        <TwitterShareButton
          url={`http://localhost:5173/posts/${_id}`}
          title={postTitle}
        >
          <XIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div>
        <FacebookShareButton
          url={`http://localhost:5173/posts/${_id}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount
            url={`http://localhost:5173/posts/${_id}`}
          >
            {(count) => count}
          </FacebookShareCount>
        </div>
      </div>
      <div >
        <WhatsappShareButton
          url={`http://localhost:5173/posts/${_id}`}
          title={postTitle}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
          <button
            onClick={handleShare}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            <FaShareAlt className="inline mr-2" />
            Share
          </button>
        </div>
          </div>
         
  
        {/* Comment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Comments</h2>
  
          {/* Comment Input */}
          <div className="space-y-2">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border rounded-lg"
              />
            <button
                onClick={handleCommentSubmit}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Comment
              </button>
            
          </div>
  
          {/* Comment List */}
          {/* <div className="space-y-4 mt-6">
            {comments.map((comment, index) => (
              <div key={index} className="flex space-x-4">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-sm text-gray-600">{comment.text}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
};

export default PostDetailsPage;