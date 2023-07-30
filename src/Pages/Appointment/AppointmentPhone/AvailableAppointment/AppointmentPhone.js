import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentPhone = ({appointmentPhone, setPhoneBooked}) => {
    const {name, slots,price,usage,_id} = appointmentPhone;
    return (
        
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-primary text-center">{name}</h2>
                    <p className='text-center'>Price: <span className='text-secondary font-semibold'>{price} TK</span> </p>
                    <p className='text-center'>Used: <span className='font-semibold'>{usage} </span> </p>
                    
                    <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}</p>

                    <div className="mt-5 card-actions justify-between">

                        <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>

                        <label 
                            htmlFor="booking-modal" 
                            className="btn btn-primary"
                            onClick={() => setPhoneBooked(appointmentPhone)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AppointmentPhone;