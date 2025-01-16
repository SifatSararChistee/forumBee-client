import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardNav from './DashBoardNav';

const Dashboard = () => {
    return (
        <div className='flex w-11/12 mx-auto max-w-screen-2xl'>
            <section className='w-1/5'><DashBoardNav></DashBoardNav></section>
            <section className='w-full'>
            <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;