import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='flex flex-col  min-h-screen'>
            <section className='sticky top-0 z-50 bg-green-200'>
            <Navbar></Navbar>
            </section>
            <section className='flex-grow'>
            <Outlet></Outlet>
            </section>
            <section className='bg-green-200'>
            <Footer></Footer>
            </section>
        </div>
    );
};

export default Root;