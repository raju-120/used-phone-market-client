import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentPhone from './AppointmentPhone';
import BookingModal from '../../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading/Loading';



const AvailableAppointment = ({selectDate}) => {
    /* const [appointmentPhones, setAppointmentPhones] = useState([]);  */
    const [phoneBooked, setPhoneBooked] = useState(null);
    const date = format(selectDate, 'PP');

    const {data:appointmentPhones =[], refetch, isLoading} = useQuery({
        queryKey: ['phoneCollections', date],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/phoneCollections?date=${date}`)
            const data = await res.json();
            return data;
        }
    }) 

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className='mt-12'>
            <p className='font-bold text-2xl text-center'>Available Phones on {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    appointmentPhones?.phones?.map(option => <AppointmentPhone
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
                    setPhoneBooked={setPhoneBooked}
                    selectDate={selectDate}
                    refetch={refetch}
                ></BookingModal>
            }
            
        </div>
    );
};

export default AvailableAppointment;