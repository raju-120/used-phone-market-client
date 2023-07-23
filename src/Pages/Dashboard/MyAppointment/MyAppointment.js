import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Context/AuthProvider';


const MyAppointment = () => {

    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/booking?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings',user],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })
    return (
        <div className='ml-5'>
            <h2 className="text-3xl mb-5">My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Device Name</th>
                            <th>Email</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            bookings && 
                            bookings.map((booking,i) =>
                            <tr key={booking._id} className="hover">
                            <th>{i+1}</th>
                            <td>{booking.user}</td>
                            <td>{booking.device}</td>
                            <td>{booking.email}</td>
                            <td>{booking.appointmentDate}</td>
                            <td>{booking.slot}</td>
                            <td>
                                {
                                    booking.price && !booking.paid &&
                                    <button className='btn btn-sm btn-info'>Pay</button>
                                }
                                {
                                                                            booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                }
                            </td>
                          </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;