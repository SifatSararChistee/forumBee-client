import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardNav = () => {
    return (
        <div>
            <h1 className='text-center text-2xl'>Dashboard</h1>
            <div className='flex flex-col items-center gap-4 mt-4'>
                <button><NavLink to={'/dashboard'}>My Profile</NavLink></button>
                <button><NavLink to={'/dashboard/addPost'}>Add Post</NavLink></button>
                <button><NavLink to={'/dashboard/myPosts'}>My Posts</NavLink></button>
            </div>
        </div>
    );
};

export default DashBoardNav;