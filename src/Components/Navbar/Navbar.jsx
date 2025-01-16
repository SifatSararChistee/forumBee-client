import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FiPlus } from 'react-icons/fi';
import useAnnouncement from '../../Hooks/useAnnouncement';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {
  const {user, logOut, setUser, loading}=useAuth()
  const [announcements]=useAnnouncement()
  const [isAdmin]=useAdmin()
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
    const links=<>
    <li className='mr-3'><NavLink to={'/'}>Home</NavLink></li>
    <li className='mr-3'><NavLink to={'/membership'}>Membership</NavLink></li>
    {
      loading ? '':<>
          {
      user && user.email ? '': <li className='mr-3'><NavLink to={'/login'}>Join Us</NavLink></li>
    }
      </>
    }
    </>
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <NavLink to={'/'}><button className="btn btn-ghost text-xl">logo + Thread Hive</button></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
      loading ? '':  (
        user && user.email ? <NavLink to={isAdmin ? '/dashboard/announcement':'/dashboard/addPost'}><button className='btn btn-success text-white text-xl font'><span className='text-xl'><FiPlus /></span>Post</button></NavLink> : ''
     ) }
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge indicator-item">{announcements.length}</span>
      </div>
    </button>
    {
      loading ? '':  (
        user && user.email ? <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL}
              referrerPolicy="no-referrer"/>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <p className="justify-between pointer-events-none">
              {user?.displayName}
            </p>
          </li>
          <li>
            <NavLink to={isAdmin ? '/dashboard/adminProfile' : '/dashboard/userProfile'}>
              DashBoard
            </NavLink>
          </li>
          <li><button onClick={handleLogOut}>Logout</button></li>
        </ul>
      </div>: ''
     ) }
  </div>
</div>
    );
};

export default Navbar;