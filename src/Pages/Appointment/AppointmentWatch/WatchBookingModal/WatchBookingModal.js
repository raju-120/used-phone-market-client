import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

const WatchBookingModal = ({watchBooked,selectDate,refetch,setWatchBooked}) => {
    const {user} = useContext(AuthContext)
    const {name:deviceName,slots,price} = watchBooked;
    const date = format(selectDate,'PP');

    const handleWatchBooking= (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;


        const watchBooking ={
            appointmentDate : date,
            device: deviceName,
            user: name,
            email,
            slot,
            phone,
            price
        }
        console.log(watchBooking);
        fetch('https://used-product-server-raju-120.vercel.app/booking',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(watchBooking)
        })
        .then(res => res.json())
        .then( data =>{
            console.log(data);
            if(data.acknowledged)
            {
                setWatchBooked(null);
                toast.success('Booking Confirmed.');
                refetch();

            }
            else{
                toast.error(data.message);
            }
        })
    }
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="watch-booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="watch-booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for {deviceName}</h3>
                    
                    <form onSubmit={handleWatchBooking} className='grid grid-cols-1 gap-3 mt-10'> 
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
        </div>
    );
};

export default WatchBookingModal;