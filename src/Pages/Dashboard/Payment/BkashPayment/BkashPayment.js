import React/* , { useState } */ from 'react';
import { useForm } from 'react-hook-form';

const BkashPayment = ({booking}) => {
    const {register,handleSubmit} = useForm();
    const {_id,user,email,price,phone,device} = booking;
    
    //const [transactionId, setTransactionId] = useState('');
    
    const handleBkashPayment= (data) =>{
        const payment = {
            user: data.user,
            email: data.email,
            price: data.price,
            phone: data.phone,
            address: data.address,
            bookingId: _id,
            deviceName: device
        } 
        console.log(payment);
        fetch('http://localhost:5000/sslPayment',{
            method:'POST',
            headers:{
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            window.location.replace(data.url);
            
        })
    }
    return (
        <div className='bg-base-200 rounded-lg mb-10'>
            <h2 className='text-3xl text-center font-semibold text-emerald-500 p-2'>Please refresh 2 or 3 times.Due to network issue it will take sometimes.</h2>
            <div className='p-5'>
                <h2 className='text-xl font-bold mb-5'>Please provide the valuable Information.</h2>
                <form onSubmit={handleSubmit(handleBkashPayment)}> 
                                
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                                
                        
                        <input type="text" 
                            defaultValue={user} 
                            { 
                                ...register('user',
                                        { 
                                            required: 'User-Name required'
                                        }
                                    )
                            }
                            placeholder="full name"
                            className="input input-bordered w-full" readOnly/>
                        
                        <input type="text"
                            defaultValue={email}
                            { 
                                ...register('email',
                                        { 
                                            required: 'email required'
                                        }
                                    )
                            }
                            placeholder="Email" className="input input-bordered w-full" readOnly/>
                        
                        <input type="text" 
                            
                            defaultValue={phone}
                            { 
                                ...register('phone',
                                        { 
                                            required: 'Phone-number required'
                                        }
                                    )
                            }
                        placeholder="My-contact-number" className="input input-bordered w-full" readOnly/>
                            
                        <input type="text"
                            
                            defaultValue={price} 
                            { 
                                ...register('price',
                                        { 
                                            required: 'price required'
                                        }
                                    )
                            }
                        placeholder='Phone Name'  className="input input-bordered w-full "readOnly/>
                        
                        
                    
                    </div>
                    <textarea type="text"
                            
                            { 
                                ...register('address',
                                        { 
                                            required: 'address required'
                                        }
                                    )
                            }
                        placeholder='Address'  className="mt-2 textarea textarea-bordered textarea-md w-full"/>
                        
                    <input className='btn mt-5 btn-primary  w-full mx-w-xs' value="Bkash Pay" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default BkashPayment;