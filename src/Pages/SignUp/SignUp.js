import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register,handleSubmit } = useForm();

    const handleSignup= data=>{
        console.log(data);
    } 
    return (
        <div>
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-5xl font-bold text-center mb-5">Register Now!</h1>
                <div className="hero-content ml-20">
                    
                    <div className=" card  w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input 
                                    type="text" {
                                        ...register('name',{
                                            required: 'Name required'
                                        })
                                    } 
                                    placeholder="full name" className="input input-bordered" />
                            </div>

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
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                    {
                                        ...register('password',{
                                            required: 'password required',
                                            minLength:{ value: 6, message: 'Password must be 6 character' },
                                            pattern:{ value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'password must have Uppercase,Number and Special character'},
                                        })
                                    }
                                    placeholder="password" className="input input-bordered" />
                                
                                

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <p>Already registered? Please <Link to='/login' className='text-xl font-bold text-info'>Login</Link> </p>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default SignUp;