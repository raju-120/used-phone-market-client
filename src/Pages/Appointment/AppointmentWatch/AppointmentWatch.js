import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableWatchAppointment from './AvailableWatchAppointment/AvailableWatchAppointment';

const AppointmentWatch = () => {
    const [selectDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <div>
                <AppointmentBanner
                    selectDate={selectDate}
                    setSelectedDate={setSelectedDate}
                ></AppointmentBanner>
            </div>
            <div>
                <AvailableWatchAppointment
                    selectDate={selectDate}
                ></AvailableWatchAppointment>
            </div>
        </div>
    );
};

export default AppointmentWatch;