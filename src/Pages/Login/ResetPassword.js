import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const ResetPassword = () => {

    const {register,formState:{errors},handleSubmit }= useForm();

    const {resetEmail} = useContext(AuthContext);

    const [emailError, setEmailError] = useState('');

    const handleReset = (data) =>{
        console.log(data);
        setEmailError('');
        resetEmail(data?.email)
            .then( () =>{
                window.alert('Password reset link sent to your email account.');
                
            })
            .catch(err => console.error(err))
    } 

    return (
        <div className="bg-base-200 rounded-xl">
                <h1 className="text-5xl font-bold text-center mb-5">Reset your Password</h1>
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className="card lg:ml-36 flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        
                    <form onClick={handleSubmit(handleReset)} className="card-body">
                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" 
                                    {
                                        ...register('email',{
                                            required: 'Email Address required'
                                        })
                                    }
                                    placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {
                                emailError && <p className='text-red-500'>{emailError}</p>
                            }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;