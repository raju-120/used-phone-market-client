import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const transactionId = query.get("transactionId");
    
    const [paymentSuccess,setPaymentSuccess] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/sslPayment/success/by-transaction-id/${transactionId}`)
        .then(res => res.json())
        .then(data=>{
            setPaymentSuccess(data);
        })
    },[transactionId]);
    
    if(!paymentSuccess?._id){
        return (
            <div>
                <h2 className='text-red-500 text-2xl'>No Payment Success found.</h2>
            </div>
        )
    };
    
    return (
        <div>
            <h2>Congrats!Your payment done successfully</h2>
            <h2>Your Payment Summary: </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>BookingID</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Transaction-ID</th>
                        <th>Transaction-Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    <tr className="hover">
                        <th></th>
                        <td>{paymentSuccess.user}</td>
                        <td>{paymentSuccess.email}</td>
                        <td>{paymentSuccess.bookingId}</td>
                        <td>{paymentSuccess.price}TK</td>
                        <td>{paymentSuccess.phone}</td>
                        <td>{paymentSuccess.transactionId}</td>
                        <td>{paymentSuccess.paidAt}</td>
                    </tr>
                    
                    </tbody>
                </table>
                <button className='btn btn-primary print:hidden' onClick={() => window.print()}>Print</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;