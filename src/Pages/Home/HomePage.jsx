import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AllPosts from '../../Components/AllPosts/AllPosts';
import useAnnouncement from '../../Hooks/useAnnouncement';
import Announcements from '../../Components/Announcements/Announcements';
import FeaturedDiscussions from '../../Components/UniqueSections/FeaturedDiscussions';
import CommunitySpotlight from '../../Components/UniqueSections/CommunitySpotlight';

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
            <section className='bg-gray-100 mt-5 py-4'>
                <AllPosts></AllPosts>
            </section>
            <section className='bg-green-200'>
                <FeaturedDiscussions></FeaturedDiscussions>
            </section>
            <section className=''>
                <CommunitySpotlight></CommunitySpotlight>
            </section>
        </div>
    );
};

export default HomePage;