import React, { useState } from 'react';
import CheckDetails from './CheckOutDetails/CheckDetails';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import BookingModal from './BookingModal/BookingModal';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    
    return (
        <div>
            <CheckDetails
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></CheckDetails>

            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>

            <BookingModal
                selectedDate={selectedDate}
            ></BookingModal>
        </div>
    );
};

export default Appointment;