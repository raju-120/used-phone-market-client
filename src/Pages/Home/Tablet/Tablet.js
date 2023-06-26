import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TabletItem from './TabletItem';

const Tablet = () => {
    const [tabletServices, setTabletServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tabCollections')
            .then(res => res.json())
            .then(data =>{
                //console.log(data);
                setTabletServices(data);
            })
    })
    return (
        <div className='mt-5 mb-5'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tabletServices.map(tab=> <TabletItem
                        key={tab._id}
                        tab={tab}
                    ></TabletItem>)
                }
            </div>
        </div>
    );
};

export default Tablet;