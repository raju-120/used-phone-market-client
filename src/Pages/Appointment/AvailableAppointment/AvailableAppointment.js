import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentPhone from './AppointmentPhone';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectDate}) => {
    const [appointmentPhones, setAppointmentPhones] = useState([]);
    const [phoneBooked, setPhoneBooked] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:5000/phoneCollections')
            .then( res => res.json())
            .then( data => setAppointmentPhones(data))
    },[])
    return (
        <div className='mt-12'>
            <p className='font-bold text-2xl text-center'>Available Phones on {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    appointmentPhones.map(option => <AppointmentPhone
                        key={option._id}
                        appointmentPhone={option}
                        setPhoneBooked={setPhoneBooked}
                    ></AppointmentPhone>)
                }
            </div>
            {
                phoneBooked &&

                <BookingModal
                    phoneBooked={phoneBooked}
                    selectDate={selectDate}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;