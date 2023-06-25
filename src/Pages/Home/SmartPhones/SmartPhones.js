import React, { useEffect, useState } from 'react';
import Phones from './Phones';

const SmartPhones = () => {

    const [phoneServices, setPhoneServices] = useState([])
    
    useEffect(()=>{
        fetch('phones.json')
            .then(res => res.json())
            .then(data =>{
                //console.log(data);
                setPhoneServices(data);
            })
    },[])
    return (
        <div>
            <div className=' mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    phoneServices.map(phoneService=> <Phones
                        key={phoneService._id}
                        phoneService={phoneService}
                    ></Phones>)
                }
            </div>
        </div>
    );
};

export default SmartPhones;