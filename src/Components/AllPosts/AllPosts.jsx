import useAxiosPublic from '../../Hooks/useAxiosPublic'
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import { useQuery } from '@tanstack/react-query';


const AllPosts = () => {
        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);
        const axiosPublic =useAxiosPublic()

        const { data: postdata = [], refetch, isLoading } = useQuery({
          queryKey: ['posts'],
          queryFn: async () => {
            const res = await axiosPublic('/posts');
            return res.data;
          },
          onSuccess: () => {
            setLoading(false); // Set loading to false when data is successfully fetched
          },
          onError: () => {
            setLoading(false); // Set loading to false in case of an error
          },
        });
        
        useEffect(() => {
          if (postdata.length > 0) {
            setPosts(postdata);
            setLoading(false)
          }
        }, [postdata]); 
      
        if (isLoading || loading) {
          return <div>Loading...</div>; // Display a loading message or spinner
        }

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