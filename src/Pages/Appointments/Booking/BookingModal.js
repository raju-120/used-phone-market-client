import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({selectedDate}) => {


    const {user} = useContext(AuthContext);
    const {name,slots} = useLoaderData();

    const date = format(selectedDate,'PP')

    const handleBooking =(event) =>{
        event.preventDefault();
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle fixed" />
            <div className="modal items-center">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold">Make an Appointment for {name}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='date' disabled value={date} className="input input-bordered w-full" />
                        
                        <select name='slot' className="select select-bordered w-full ">
                        
                            {
                                slots.map((slot,i) =><option 
                                    value={slot}
                                    key={i}
                                >{slot}</option> )
                            }
                        </select>
                        
                        <input type="text" name='name'  /* disabled defaultValue={user?.displayName}  */placeholder="Name" className="input input-bordered w-full" required/>
                        <input type="text" name='email' disabled defaultValue={user?.email}  placeholder="Email Address" className="input input-bordered w-full" required/>
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full" required/>
                        <br />
                        <input type="submit" className='w-full max-w-xl btn btn-accent' value='Submit'/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;