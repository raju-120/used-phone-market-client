import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointmentTablet from './AvailableAppointmentTablet/AvailableAppointmentTablet';

const AppointmentTablet = () => {
    const [selectDate, setSelectedDate] = useState(new Date() )
    

    return (
        <div>
            <AppointmentBanner
                selectDate={selectDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppointmentTablet
              selectDate={selectDate}
            ></AvailableAppointmentTablet>
        </div>
    );
};

export default AppointmentTablet;