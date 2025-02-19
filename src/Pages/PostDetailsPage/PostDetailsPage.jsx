import React, { useEffect, useState } from 'react';
import { FaRegThumbsDown, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import {FacebookShareCount, FacebookIcon, FacebookShareButton, TwitterShareButton, XIcon, WhatsappShareButton, WhatsappIcon} from "react-share";
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const PostDetailsPage = () => {
    const postData= useLoaderData()
    const navigate =useNavigate()
    const {user}= useAuth()
    const {_id:postId,authorName, authorImg, postTitle, tags, time, comments, upVotes, downVotes,description}=postData
    const commentDate = new Date().toLocaleDateString(); 
    const [newComment, setNewComment] = useState('');
    const [upVotesCount, setUpVotesCount] = useState(upVotes);
    const [downVotesCount, setDownVotesCount] = useState(downVotes);
    const axiosPublic =useAxiosPublic()
    const axiosSecure =useAxiosSecure()
    // console.log(postId)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    //load the comments
    const { data, refetch } = useQuery({
      queryKey: ["comments"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/comments/${postId}`);
      return(res.data)
      },
    });

      // Handle comment submission
      const handleCommentSubmit = async(e) => {
        e.preventDefault();
        if (!user) {
          navigate('/login');
          return;
      }
  

      const comment = {
        text: newComment,
        date: commentDate,
        postId: postId, 
        userName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
    };

    // console.log(comment)
    try {
      const response = await axiosSecure.post('/comments', comment);
      // console.log(response.data)
      if(response.data.insertedId){
        toast.success('Comment submitted successfully!');
      }
      setNewComment('');
      refetch()
  } catch (error) {
      console.error('Error submitting comment:', error.response?.data || error.message);
      toast.error('Failed to submit the comment. Please try again.');
  }
      };

    const handleUpvote = () => {
      if (!user) return toast.error('You need to log in to vote!');
      setUpVotesCount(upVotes + 1);
    };
  

    const handleDownvote = () => {
      if (!user) return toast.error('You need to log in to vote!');
      setDownVotesCount(downVotes + 1);
    };
  
    const handleShare = () => {
      alert('Post shared!');
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
            <span>{upVotesCount}</span>
            <button
              onClick={handleDownvote}
              className="text-red-500 hover:text-red-600"
            >
              <FaRegThumbsDown size={24} />
            </button>
            <span>{downVotesCount}</span>
          </div>
  
          {/* Share Button */}
<div>
      {/* Trigger Button */}
      <button
      disabled={!user}
        onClick={openModal}
        className={`px-4 py-2 text-white rounded-full
          ${user ? "bg-green-600":"bg-gray-400 cursor-not-allowed"}
          `}
        >
          <FaShareAlt className="inline mr-2" />
          Share
        </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="bg-white p-5 rounded shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {/* Modal Content */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Share this post</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <TwitterShareButton
                  url={`http://localhost:5173/posts/${postId}`}
                  title={postTitle}
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div>
                <FacebookShareButton
                  url={`http://localhost:5173/posts/${postId}`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <div>
                  <FacebookShareCount
                    url={`http://localhost:5173/posts/${postId}`}
                  >
                    {(count) => count}
                  </FacebookShareCount>
                </div>
              </div>
              <div>
                <WhatsappShareButton
                  url={`http://localhost:5173/posts/${postId}`}
                  title={postTitle}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
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
                disabled={!newComment}
                onClick={handleCommentSubmit}
                className={`mt-2 px-4 py-2 text-white rounded-full ${
                  newComment ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Comment
              </button>
            
          </div>
  
          {/* Comment List */}
          <div className="space-y-4 mt-6">
          {data && data.length > 0 ? (
  data.map((comment, index) => (
    <div key={index} className="flex space-x-4 items-center">
      <img
      referrerPolicy="no-referrer"
        src={comment.photoURL}
        alt={comment.userName}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-bold">{comment.userName}</p>
        <p className="text-sm">{comment.date}</p>
        <p className="text-lg text-gray-600">{comment.text}</p>
      </div>
    </div>
  ))
) : (
  <p className="text-gray-500">No comments yet.</p>
)}

          </div>
        </div>
      </div>
    );
};

export default PostDetailsPage;