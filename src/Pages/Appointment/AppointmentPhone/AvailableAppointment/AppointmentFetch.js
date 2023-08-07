/* import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const AppointmentFetch = ({selectDate}) => {
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
    return (
        <div>
            
        </div>
    );
};

export default AppointmentFetch; */