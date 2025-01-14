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
        <div>
            <select>
              <option value="">Sort</option>
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