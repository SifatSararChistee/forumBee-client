import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col  min-h-screen'>
            <Navbar></Navbar>
            <section className='flex-grow'>
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Root;