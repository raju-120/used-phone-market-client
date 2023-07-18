import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({phoneBooked,selectDate, setPhoneBooked, refetch}) => {

    const {name:deviceName,slots,price} = phoneBooked;
    const date = format(selectDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking= (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking ={
            appointmentDate : date,
            device: deviceName,
            user : name,
            slot,
            email,
            phone,
            price
        }
        fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.acknowledged)
            {
                setPhoneBooked(null);
                toast.success('Booking Confirmed');
                refetch();
                
            }
            else{
                toast.error(data.error);
            }
        })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for {deviceName}</h3>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> 
                        <input type="text" disabled defaultValue={date}  className="input input-bordered w-full " />
                        
                        <select name='slot' className="select select-bordered w-full">
                            
                            {
                                slots?.map((slot,i) => <option 
                                value={slot}
                                key={i} 
                                >{slot}</option>)
                            } 
                        </select>
                        
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full " required/>
                        <input name='email'  disabled defaultValue={user?.email} type="text" placeholder="Email" className="input input-bordered w-full " required/>
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full " required/>
                        
                        <br />
                        <input className='w-full  btn btn-accent' type="submit" value='submit'/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;