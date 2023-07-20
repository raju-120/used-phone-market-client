import React from 'react';
import picture from '../../../assets/images/APBANNER.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectDate, setSelectedDate,disablePastDt}) => {
    
    
    return (
        
        <header>
            <div className="hero min-m-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} alt='phone photos' className="max-w-xs lg:ml-10 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                       
                        <DayPicker
                            mode='single'
                            selected={selectDate}
                            onSelect={setSelectedDate}
                            isValidDate={disablePastDt}
                        ></DayPicker>

                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default AppointmentBanner;