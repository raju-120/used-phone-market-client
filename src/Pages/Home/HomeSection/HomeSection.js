import React from 'react';
import photo from '../../../assets/images/photos.jpg';

const HomeSection = () => {
    return (
        <div className=" mt-3 hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Welcome to the <br /> <span className='text-primary'>Second-hand phone shop</span> </h1>
                    <p className="py-6">You can find our your desire second-hand phone here.Also,You can buy or sell it in this platform.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <img src={photo} className='w-94' alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeSection;