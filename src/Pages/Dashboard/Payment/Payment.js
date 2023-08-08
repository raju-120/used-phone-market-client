import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import card from '../../../assets/logo/credit-card 1.png';
import bkash from '../../../assets/logo/bkash.jpg';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckOut from './StripeCheckOut/StripeCheckOut';
import BkashPayment from './BkashPayment/BkashPayment';
import useTitle from '../../../UseHooks/UseTitle/UseTitle';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {

    useTitle('Payment');
    const booking = useLoaderData();
    const {device,price,slot,appointmentDate}=booking;

    const [select, setSelect] = useState({
        isAgree: false, //checkbox
        //selection: 'card'
    });

    const handleChange =(event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setSelect({
            ...select,
            [name] : value
        })
    }

    return (
        <div className='ml-5'>
            <h2 className="text-3xl mb-5 text-center bg-red-400 p-5 rounded-xl">Payments for {device}</h2>
            <h2 className='text-xl text-center mt-10 mb-5'>please pay <span className='font-semibold'>{price}TK</span> for your appointment on {appointmentDate} at {slot}</h2>
            <div className='divider'></div>
            <div>
                <h2 className='text-xl text-center'>Please select which way you want to pay.</h2>
                <div className='divider'></div>
                <div className='mt-5 '>
                    <div className=' lg:ml-80 grid grid-cols-1 lg:grid-cols-3'>
                        <div className="flex">
                                <input type="radio" name="selection" value="card" className="m-2 p-3 radio checked:bg-lime-600"
                                onChange={handleChange} checked={select.selection === "card"} />
                                
                                <div className='flex'>
                                    <div>
                                        <img src={card} alt="" style={{width: '40px'}}/>
                                    </div>
                                    <div className='py-1'>
                                        <label>Credit/Debit card</label>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="flex">
                            <input type="radio" name="selection" value="bkash" className="m-2 radio checked:bg-indigo-600"
                                onChange={handleChange} checked={select.selection === "bkash"} />
                            
                            <div className='flex'>
                                <div>
                                    <img src={bkash} alt="" className='m-2' style={{width: '50px'}}/>
                                </div>
                                <div className='py-1'>
                                    <label>Bkash Payment</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* <h2>selected method: {select.selection}</h2> */}
                <div className='lg:mx-96 mx-5 lg: my-10'>
                    {
                        select.selection === "card" &&
                        <Elements stripe={stripePromise}>
                        <StripeCheckOut
                            booking={booking}
                        />
                        </Elements>
                    }
                    {
                        select.selection === "bkash" &&
                        <BkashPayment
                            booking={booking}
                        ></BkashPayment>
                    }  
                </div> 
            </div>
        </div>
    );
};

export default Payment;