import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const AllPosts = () => {
        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          // Fetch data using axios
          axios
            .get("/fakeData.json")
            .then((response) => {
              setPosts(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching data: ", error);
              setLoading(false);
            });
        }, []);
        console.log(posts)
      
        if (loading) return <div>Loading...</div>;

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                posts.map((post, index)=><PostCard key={index} post={post}></PostCard>)
            }
        </div>
    );
};

export default AllPosts;