import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../../assets/images/mobile.avif';
import paid from '../../../../assets/logo/paid.jpg'


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
        <div className='m-5'>
            <header className='mt-5'>
                <h2 className='text-4xl font-semibold text-center text-green-500 print:hidden'>Congratulation!!Successfully completed your payment</h2>
                <section className='mt-10 flex justify-between'>
                    <div>
                        <h2 className='text-3xl font-bold'>Resell Market</h2>
                        <p className='font-Bold divider w-48'>Delivery Address:</p>
                        <p className='font-semibold text-lg'>{paymentSuccess.user}</p>
                        <p>Address: {paymentSuccess.address}</p>
                        <p>Email: {paymentSuccess.email}</p>
                        <p>Phone: {paymentSuccess.phone}</p>
                    </div>
                    <div>
                        <div className='flex'>
                            <div>
                                <img src={logo} className='m-4' style={{width: '70px' , borderRadius: '50px'}} alt="" />
                            </div>    
                            <div>
                                <h2 className='text-3xl font-bold'>Techno Limited</h2>
                                <p>House: 24,Road: 12,Sector: 13 <br />
                                    Uttara: 1200, Dhaka.
                                </p>
                                <p className='text-xs'>email: resellmarket@gmail.com</p>
                                <div className='mt-5'>
                                    <h2 className='text-2xl font-bold'>Order Invoice</h2>
                                    <p>Date: {paymentSuccess.paidAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <body>
                <section className='mt-10'>
                    <h2 className='print:hidden mt-5 text-lg mb-5'>Your Payment Summary: </h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>SL</th>
                                <th>Item</th>
                                <th>Transaction-ID</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            <tr className="active">
                                <th>01</th>
                                <td>{paymentSuccess.user}</td>
                                <td>{paymentSuccess.transactionId}</td>
                                <td>{paymentSuccess.price}TK</td>
                            </tr>
                            
                            </tbody>
                        </table>
                        <button className='mt-4 w-full btn btn-primary  print:hidden' onClick={() => window.print()}>Print</button>
                    </div>
                </section>
            </body>
            <footer className='mt-5'>
                <div>
                    <div className='flex'>
                        <div>
                            <img src={paid} style={{width:'90px'}} alt="" />
                        </div>
                        <div className='p-2'>
                            <p className='text-xs'>***This oder is pre-paid,
                                <br /> You do not need to pay addition amount for this order.***</p>
                        </div>
                    </div>
                    <div className='mt-5 mb-5'>
                        <h2>Thanks for purchasing from Resell Market As the article you purchased is a precious one, by policy, to protect your interest, we do not return back/
                            exchange any item sold.</h2>
                    </div>
                    <div className='mb-5'>
                        <h2>The highest compliment that we can receive is your referral.</h2>
                    </div>
                    <div>
                        <h2>For Warranty details please visit:</h2>
                        <p>Web: http://localhost:3000, Hot Line: +880170000000</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PaymentSuccess;