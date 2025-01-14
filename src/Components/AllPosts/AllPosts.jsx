import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import usePosts from '../../Hooks/usePosts';
import { useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const AllPosts = () => {
        const [postData, refetch, isLoading, isError, error]=usePosts()
        const [posts, setPosts] = useState([]);
        const queryClient = useQueryClient();
        const axiosPublic = useAxiosPublic()

        useEffect(() => {
          if (postData.length > 0) {
            setPosts(postData);
          }
        }, [postData]); 

        if (isLoading) return <p className='text-3xl text-center'>Loading....</p>;
        if (isError) return <p>Error loading posts: {error.message}</p>;

        const handleSortBtn =async()=>{
          const res = await axiosPublic.get(`/sorted`);
          const data = res.data;
          console.log(data)
          queryClient.setQueryData(["posts"], data)
        }
      
    return (
        <div>
          <div className='text-right mb-4'>
                <button onClick={handleSortBtn} className='btn btn-success text-white'>Sort By Popularity</button>
            </div>
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