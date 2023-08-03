import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const StripeCheckOut = ({booking}) => { 

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const {price,user,email,phone} = booking;
    const stripe = useStripe();
    const elements = useElements(); 
   
    useEffect(()=>{
        fetch("http://localhost:5000/create-payment-intent",{
            method: 'POST',
            headers:{
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price}),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async(event )=>{
        event.preventDefault();
        if(!stripe || !elements)
        {
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null)
        {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user,
                  email: email,
                  phone: phone
                },
              },
            },
        );
        /* if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded")
        {
            setSuccess('Congrats! Your payment completed');
            setTransactionId(paymentIntent.id);
        } */
        console.log('paymentIntent',paymentIntent)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                            color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                        },
                    }}
                />
                <button className='btn mt-4 w-full btn-primary' type="submit" 
                    disabled={!stripe || !clientSecret} >
                    Pay
                </button>
            </form>
            <p className="text-xl red-500">{cardError}</p>
            {/* {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transaction id is: <span className='font-bold'>{transactionId}</span> </p>
                </div>
            } */}
        </div>
    );
};

export default StripeCheckOut;