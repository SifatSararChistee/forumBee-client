import React, { useContext, useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import usePosts from '../../Hooks/usePosts';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { PostsContext } from '../../Provider/PostProvider';

const AllPosts = () => {
        const [postData, refetch, isLoading, isError, error]=usePosts()
        const {posts , setPosts} = useContext(PostsContext)
        const axiosPublic = useAxiosPublic()
        const [currentPage, setCurrentPage]=useState(0)

        const itemsPerPage = 5;
      const count = postData.length
      const numberOfPages= Math.ceil(count/itemsPerPage)
      const pages = [...Array (numberOfPages).keys()];
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axiosPublic.get(`/posts?page=${currentPage}&limit=${itemsPerPage}`);
            setPosts(response.data); 
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
      
        fetchPosts(); 
      
      }, [currentPage, itemsPerPage]);

      
        const handleSortBtn =async()=>{
          const res = await axiosPublic.get(`/sorted?page=${currentPage}&limit=${itemsPerPage}`);
          const data = res.data;
          setPosts(data)
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
          {
            pages.map(page =><button key={page} 
              className={`btn join-item ${currentPage === page ? 'btn-active' : ''}`}
              onClick={()=> setCurrentPage(page)}>{page}</button>)
          }
            {/* <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button> */}
        </div>
        </div>

    );
};

export default AllPosts;