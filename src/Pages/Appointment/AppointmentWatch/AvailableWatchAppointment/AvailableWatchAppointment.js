import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import WatchAppointment from './WatchAppointment';
import WatchBookingModal from '../WatchBookingModal/WatchBookingModal';
import Loading from '../../../../Shared/Loading/Loading';

const AvailableWatchAppointment = ({selectDate}) => {

    const [watchBooked, setWatchBooked] = useState(null); 
    const date = format(selectDate,'PP');

    const {data: appointmentWatches=[], isLoading, refetch} = useQuery({
        queryKey:['watchCollections',date],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/watchCollections?date=${date}`);
            const data = res.json();
            return data
        }
    })

    if(isLoading)
    {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>
            <p className='font-bold text-2xl text-center'>Available Phones on {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-col-2 lg:grid-cols-3'>
                {
                    appointmentWatches.map(option => <WatchAppointment
                        key={option._id}
                        appointmentWatch={option}
                        setWatchBooked={setWatchBooked}
                    ></WatchAppointment>)
                }
            </div>
            {
                watchBooked &&
                <WatchBookingModal
                    watchBooked={watchBooked}
                    selectDate={selectDate}
                    setWatchBooked={setWatchBooked}
                    refetch={refetch}
                ></WatchBookingModal>
            }
        </div>
    );
};

export default AvailableWatchAppointment;