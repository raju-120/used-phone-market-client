import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <h2>Your Selected date is: {format(selectedDate, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;