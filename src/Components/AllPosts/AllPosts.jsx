import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import usePosts from '../../Hooks/usePosts';

const AllPosts = () => {
        const [postData, refetch, isLoading, isError, error]=usePosts()
        const [posts, setPosts] = useState([]);
        useEffect(() => {
          if (postData.length > 0) {
            setPosts(postData);
          }
        }, [postData]); 

        if (isLoading) return <p className='text-3xl text-center'>Loading....</p>;
        if (isError) return <p>Error loading posts: {error.message}</p>;
      
    return (
        <div>
            <select className='mb-5'>
              <option value="">Sort By Popularity</option>
              <option value="">Up Vote</option>
              <option value="">Down Vote</option>
            </select>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                posts.map((post, index)=><PostCard key={index} post={post}></PostCard>)
            }
        </div>
        <div className="join my-5">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
        </div>
        </div>

    );
};

export default AllPosts;