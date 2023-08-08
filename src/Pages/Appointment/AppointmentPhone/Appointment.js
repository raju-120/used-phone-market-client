import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import useTitle from '../../../UseHooks/UseTitle/UseTitle';


const Appointment = () => {
    
    useTitle('PhoneAppointment');
    const [selectDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectDate={selectDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppointment
                selectDate={selectDate}
            ></AvailableAppointment>
        </div>
    );

};

export default Appointment;