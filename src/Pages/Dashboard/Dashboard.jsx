import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardNav from './DashBoardNav';

const Dashboard = () => {
    return (
        <div className='flex w-11/12 mx-auto max-w-screen-2xl'>
            <section className='w-1/5 border-2 border-black'><DashBoardNav></DashBoardNav></section>
            <section className='w-full border-2 border-black'>
            <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;