import React from 'react';
import WatchItem from './WatchItem';
import img1 from '../../../assets/images/Watch/Apple.jpg';
import img2 from '../../../assets/images/Watch/Samsung.jpg';
import img3 from '../../../assets/images/Watch/xiaomi.jpeg';
import { Link } from 'react-router-dom';

const SmartWatch = () => {
    const watchData =[
        {
            _id: 1,
            img: img1,
            name: 'Apple watch series-7'
        },
        {
            _id: 2,
            img: img2,
            name: 'Samsung Galaxy Watch 5'
        },
        {
            _id: 3,
            img: img3,
            name: 'Xiaomi Haylou RT2'
        },
    ]
    

    return (
        <div className='mt-5'>
            <div className=' grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    watchData.map(data => <WatchItem
                        key={data._id}
                        data={data}
                    ></WatchItem>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link className='btn btn-primary'>Explore Available Watch</Link>
            </div>
        </div>
    );
};

export default SmartWatch;