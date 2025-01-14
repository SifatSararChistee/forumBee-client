import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQueryClient } from '@tanstack/react-query';

const Banner = () => {
    const axiosPublic = useAxiosPublic()
    const [search, setSearch]= useState('')
    const [tags, setTags]=useState([])
    const queryClient = useQueryClient();

    useEffect(() => {
        const fetchTags = async () => {
          try {
            // Make the request to fetch tags
            const response = await axiosPublic.get('/tags');
            // Log the response data
            setTags(response.data.tags);
          } catch (err) {
            console.error('Error fetching tags:', err);
          }
        };
    
        fetchTags(); // Call the async function to fetch tags
      }, []); 


    const handleSearchClick = (tag) => {
        setSearch(tag);
      };

      console.log(search)
    const handleSearch = async () => {
        if (!search.trim()) {
          alert("Type the topic");
          return;
        }
      
        try {
          const res = await axiosPublic.get(`/search?query=${encodeURIComponent(search)}`);
          const data = res.data;
      
          if (!data || data.length === 0) {
            alert("No results found for your search.");
          } else {
            console.log("Search Results:", data);
            queryClient.setQueryData(["posts"], data) 
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
          alert("Failed to fetch search results. Please try again later.");
        }
      };
      
    return (
        <div className='bg-orange-400 h-2/3 space-y-10'>
            <h1 className='text-7xl text-center'>Welcome TO thread Hive</h1>
            <div className='flex items-center justify-center my-10'>
            <label className="input input-bordered rounded-r-none flex items-center w-1/2">
                            <input 
                                                type="text"
                                                placeholder="Search for Topics...."
                                                aria-label="Search for Topics...."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                className="grow"/>
                            </label>
                            <button onClick={handleSearch} className='btn btn-success text-white rounded-l-none'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                            </button>
            </div>
            <div className='text-center'>
            {tags.map((tag,i)=><button onClick={() => handleSearchClick(tag)} className='btn my-3 mx-2' key={i} >#{tag}</button>)}
            </div>
        </div>
    );
};

export default Banner;