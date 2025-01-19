import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AllPosts from '../../Components/AllPosts/AllPosts';
import useAnnouncement from '../../Hooks/useAnnouncement';
import Announcements from '../../Components/Announcements/Announcements';

const HomePage = () => {
    const[announcements]=useAnnouncement()
    return (
        <div>
            <section className='bg-green-200'>
            <Banner></Banner>
            </section>
            {
                announcements.length > 0 &&
                <section className='my-4'>
                    <Announcements></Announcements>
                </section>
            }
            <section className='max-w-screen-2xl mx-auto w-11/12'>
                <AllPosts></AllPosts>
            </section>
        </div>
    );
};

export default HomePage;