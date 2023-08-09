import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const TabBookingModal = ({selectDate,tabletBooked,setTabletBooked,refetch}) => {

    const {name: deviceName,slots,price} = tabletBooked;
    const {user} = useContext(AuthContext);
    const date = format(selectDate,'PP');


    const handleTabBooking = (event) =>{
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
        console.log(booking)
        fetch(`https://used-product-server-raju-120.vercel.app/booking`,{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:  JSON.stringify(booking)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if (data.acknowledged)
            {
                setTabletBooked(null);
                toast.success('Booking Confirm.');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
    }

    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="tab-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="tab-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Appointment for {deviceName} </h3>
                    
                    <form onSubmit={handleTabBooking} className='grid grid-cols-1 gap-3 mt-10'> 
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

export default TabBookingModal;