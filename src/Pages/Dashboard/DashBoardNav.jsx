import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardNav = () => {
    const isAdmin= true;
    return (
        <div>
            <h1 className='text-center text-2xl'>
                {isAdmin ? "Admin Dashboard": "User Dashboard"}</h1>
            <div className='flex flex-col items-center gap-4 mt-4'>
                {!isAdmin ? 
                <>
                <button><NavLink to={'/dashboard'}>My Profile</NavLink></button>
                <button><NavLink to={'/dashboard/addPost'}>Add Post</NavLink></button>
                <button><NavLink to={'/dashboard/myPosts'}>My Posts</NavLink></button>
                </>
                :
                <>
                <button><NavLink to={'/dashboard/adminProfile'}>adminProfile</NavLink></button>
                <button><NavLink to={'/dashboard/manageUsers'}>manageUsers</NavLink></button>
                <button><NavLink to={'/dashboard/announcement'}>announcement</NavLink></button>
                <button><NavLink to={'/dashboard/reportedComments'}>reportedComments</NavLink></button>
                </>}
            </div>
        </div>
    );
};

export default DashBoardNav;