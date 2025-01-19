import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoardNav from './DashBoardNav';

const Dashboard = () => {
    return (
        <div className='flex w-11/12 mx-auto max-w-screen-2xl my-4'>
            <section className='w-1/5  bg-green-200 m-3 rounded-xl'><DashBoardNav></DashBoardNav></section>
            <section className='w-full'>
            <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;