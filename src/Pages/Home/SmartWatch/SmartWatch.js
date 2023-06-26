import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import WatchItem from './WatchItem';

const SmartWatch = () => {
    const [smartWatchServices, setSmartWatchServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/watchCollections')
            .then(res => res.json())
            .then(data =>{
                //console.log(data);
                setSmartWatchServices(data);
            })
    })
    return (
        <div className='mt-5'>
            <div className=' grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    smartWatchServices.map(watchService => <WatchItem
                        key={watchService._id}
                        watchService={watchService}
                    ></WatchItem>)
                }
            </div>
        </div>
    );
};

export default SmartWatch;