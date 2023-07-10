import React, { useEffect, useState } from 'react';
import PhoneItems from './PhoneItems';

const AvailablePhones = () => {
    
    const [phonesItems,setPhonesItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/phoneCollections')
            .then(res => res.json())
            .then(data => setPhonesItems(data))
    },[])
    return (
        <div>
            <div className='divider'></div>
            <h2 className='text-5xl text-center font-semibold'>Available Phones</h2>
            <div className='divider'></div>

            <div className='grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    phonesItems.map(items =><PhoneItems
                        key={items._id}
                        items={items}
                    ></PhoneItems>)
                }
            </div>

        </div>
    );
};

export default AvailablePhones;