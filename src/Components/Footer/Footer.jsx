import React from 'react';
import logo from "../../assets/icons8-forumbee-100.png"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
<footer className="footer max-w-screen-2xl text-base-content p-10 mx-auto bg-green-200 shadow-lg rounded-lg flex flex-col items-center">
  <div className="flex flex-col justify-between items-center">
    {/* Logo & Tagline */}
    <aside className="flex items-center mb-6 md:mb-0">
      <img src={logo} alt="Forumbee Logo" className="w-16 h-16 mr-4" />
      <p className="text-4xl font-bold text-left">
        Forumbee
        <br />
        <span className="text-lg font-normal text-gray-600">
          Providing reliable content since 2024
        </span>
      </p>
    </aside>

    {/* Navigation Links */}
    <ul className="list-none text-base flex gap-6 mt-5">
      <li className="hover:text-blue-600 transition-colors font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-blue-600 transition-colors font-medium">
        <NavLink to="/latest">Latest Topics</NavLink>
      </li>
      <li className="hover:text-blue-600 transition-colors font-medium">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="hover:text-blue-600 transition-colors font-medium">
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </div>

  {/* Copyright Section */}
  <div className="text-center border-t">
    <p>&copy; {new Date().getFullYear()} Forumbee. All rights reserved.</p>
  </div>
</footer>

    );
};

export default Footer;