import React from 'react';
import Banner from '../Banner/Banner';
import HomeSection from '../HomeSection/HomeSection';
import SmartPhones from '../SmartPhones/SmartPhones';
import Tablet from '../Tablet/Tablet';
import SmartWatch from '../SmartWatch/SmartWatch';
import Report from '../Report/Report';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSection></HomeSection>

            <h2 className='text-5xl font-semibold mt-5 text-center'>Categories</h2>
            <div className="divider"></div>
            <h2 className='text-4xl font-bold mt-5'>Smart Phones</h2>
            <div className="divider"></div>
            <SmartPhones></SmartPhones>

            <div className="divider"></div>
            <h2 className='text-4xl font-bold mt-5'>Tablets</h2>
            <div className="divider"></div>
            <Tablet></Tablet>

            <div className="divider"></div>
            <h2 className='text-4xl font-bold mt-5'>Smart Watch</h2>
            <div className="divider"></div>
            <SmartWatch></SmartWatch>

            <Report></Report>
        </div>
    );
};

export default Home;