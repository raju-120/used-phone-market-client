import React from 'react';

const TabletAppointment = ({option,setTabletBooked}) => {

    const{name,price,usage,slots} = option;
    

    return (
        <div className='mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <p className='text-center'>Price: <span className='text-orange-400 font-semibold'>{price}</span> </p>
                    <p className='text-center'>Used: <span className='font-bold'>  {usage} </span></p>
                    <p className='text-center'>Slots available : {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} </p>
                    <div className="mt-3 card-actions justify-between">
                        <button className="btn btn-primary">Details</button>
                        
                        <label 
                            htmlFor="tab-booking-modal" 
                            className="btn btn-primary"
                            onClick={() => setTabletBooked(option)}
                            >Book Appointment</label>
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletAppointment;