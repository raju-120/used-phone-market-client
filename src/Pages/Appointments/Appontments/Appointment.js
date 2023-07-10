import React, { useState } from 'react';
import PhonesDetails from '../PhonesDetails/PhonesDetails';
import BookingModal from '../Booking/BookingModal';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
    return (
        <>
          <PhonesDetails
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          ></PhonesDetails> 

          <BookingModal
            selectedDate={selectedDate}
          ></BookingModal> 
        </>
    );
};

export default Appointment;