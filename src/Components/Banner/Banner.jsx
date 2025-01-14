import React from 'react';

const Banner = () => {
    const forumTags = ["Web Development", "Programming", "Software", "Hardware", "AI & Machine Learning"];

    

    return (
        <div className='bg-orange-400 h-2/3 space-y-10'>
            <h1 className='text-5xl text-center'>Announcements</h1>
            <h1 className='text-7xl text-center'>Welcome TO thread Hive</h1>
            <div className='flex items-center justify-center my-10'>
            <label className="input input-bordered flex items-center w-1/2 gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <button className='btn btn-success text-white'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                            </button>
                            </label>
            </div>
            <div className='text-center'>
            {forumTags.map((forumTag,i)=><button className='btn mr-3' key={i}>#{forumTag}</button>)}
            </div>
        </div>
    );
};

export default Banner;