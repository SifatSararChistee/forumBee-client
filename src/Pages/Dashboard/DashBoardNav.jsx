import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaPlusCircle, FaListAlt, FaCogs, FaExclamationCircle } from 'react-icons/fa';
import useAdmin from '../../Hooks/useAdmin';

const DashBoardNav = () => {
    const [isAdmin] =useAdmin()

    return (
        <div className="flex flex-col min-h-screen rounded-lg">
            <header className="bg-green-700 text-white p-4 shadow-md">
                <h1 className="text-2xl font-semibold text-center">
                    {isAdmin ? "Admin Dashboard" : "User Dashboard"}
                </h1>
            </header>

            <nav className="bg-green-200 min-h-screen p-4 space-y-4 flex-1">
                <div className="space-y-4">
                    {!isAdmin ? (
                        <>
                            <NavLink 
                                to={'/dashboard/userProfile'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaUser className="mr-2" />
                                My Profile
                            </NavLink>

                            <NavLink 
                                to={'/dashboard/addPost'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaPlusCircle className="mr-2" />
                                Add Post
                            </NavLink>

                            <NavLink 
                                to={'/dashboard/myPosts'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaListAlt className="mr-2" />
                                My Posts
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink 
                                to={'/dashboard/adminProfile'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaUser className="mr-2" />
                                Admin Profile
                            </NavLink>

                            <NavLink 
                                to={'/dashboard/manageUsers'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaCogs className="mr-2" />
                                Manage Users
                            </NavLink>

                            <NavLink 
                                to={'/dashboard/announcement'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaExclamationCircle className="mr-2" />
                                Announcement
                            </NavLink>

                            <NavLink 
                                to={'/dashboard/reportedComments'} 
                                className={({ isActive }) => 
                                    `btn btn-ghost w-full text-left hover:bg-gray-200 ${isActive ? 'bg-gray-300 text-black' : ''}`
                                }
                            >
                                <FaExclamationCircle className="mr-2" />
                                Reported Comments
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default DashBoardNav;
