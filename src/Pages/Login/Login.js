import React from 'react';
import {Link} from 'react-router-dom'
import pic from '../../assets/images/login.jpg';

const Login = () => {
    return (
        <div>
            <div className="bg-base-200">
                <h1 className="text-5xl font-bold text-center mb-5">Login</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">

                        <img src={pic} className='rounded-lg' style={{width: '75%'}} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;