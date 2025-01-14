import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AllPosts from '../../Components/AllPosts/AllPosts';

const HomePage = () => {
    return (
        <div className='space-y-16'>
            <section>
            <Banner></Banner>
            </section>
            <section className='max-w-screen-2xl mx-auto w-11/12'>
                <AllPosts></AllPosts>
            </section>
        </div>
    );
};

export default HomePage;