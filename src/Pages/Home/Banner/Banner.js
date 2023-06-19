import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import banner1 from '../../../assets/images/banner1.jpg';
import banner2 from '../../../assets/images/banner2.jpg';
import banner3 from '../../../assets/images/banner3.jpg';
//import banner4 from '../../../assets/images/banner4.jpg';
import banner4 from '../../../assets/images/banner4.webp';
import './Banner.css';
import "swiper/swiper.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={false}

            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={false}


            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
            <div
                slot="container-start"
                className="parallax-bg"

                data-swiper-parallax="-23%">

            </div>
            
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner '>
                        <div className='flex items-center'>
                            <div className='text-white px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif'>Find your desire second-hand here.</h1>
                                <h1 className='text-6xl	mb-5'>Choose your phones </h1>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner1} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner2 '>
                        <div className='flex items-center'>
                            <div className=' px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif'>Find your desire second-hand here.</h1>
                                <h1 className='text-6xl	mb-5'>Choose your phones </h1>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner4} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner3 '>
                        <div className='flex items-center'>
                            <div className=' px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif'>Find your desire second-hand here.</h1>
                                <h1 className='text-6xl	mb-5'>Choose your phones </h1>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner2} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="title" data-swiper-parallax="-300">

                    <div className='banner4 '>
                        <div className='flex items-center'>
                            <div className=' px-12'>
                                <h1 className='font-bold text-xl mb-4 font-serif'>Find your desire second-hand here.</h1>
                                <h1 className='text-6xl	mb-5'>Choose your phones </h1>
                            </div>
                            <div>
                                <img className='banner-img pt-5 px-12' src={banner3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;