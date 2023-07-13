import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import pic from '../../assets/images/login.jpg';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import googlePhoto from '../../assets/logo/Google__G__Logo.svg.webp';
import facebookPhoto from '../../assets/logo/Facebook_f_logo_(2021).svg.png';

const Login = () => {

    const {register,formState:{errors} ,handleSubmit}= useForm();
    const {signIn/* , resetEmail */,googleLogin} = useContext(AuthContext)
    
    const [loginError, setLoginError] = useState('');

    const navigate= useNavigate();


    const handleLogin = (data) =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                toast('Login successfully');
                navigate('/');
            })
            .catch(err =>{
                console.log(err);
            })
    }

    const handleGoogleLogIn= () =>{
        googleLogin()
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast('Successfully user login with Google');
                navigate('/');
            })
    }

    /* const handleReset = () =>{
        resetEmail()
            .then( () =>{})
            .catch(err => {
                const message = err.message;
                console.log(message);
            })
    } */

    return (
        <div>
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-5xl font-bold text-center mb-5">Login Now</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">

                        <img src={pic} className='rounded-lg' style={{width: '75%'}} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            

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

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                    {
                                        ...register('password',{
                                            required: 'password required',
                                            minLength: {value:6, message:'Password must be 6 character'},
                                            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'}
                                        })
                                    }
                                    placeholder="password" className="input input-bordered" />
                                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                                
                                <label className="label">
                                    <Link /* onClick={handleReset} */ className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }

                        <p className='ml-8'>New to used-phone? Please <Link to='/registration' className='text-xl font-bold text-info'>SignUp</Link> </p>
                        </form>
                        
                        {/* Other platform  login with  */}

                        <div onClick={handleGoogleLogIn} className='flex max-w-xs ml-16 mb-2 btn'>
                            <div>
                                <h2>Sign-in with Google</h2>
                            </div>
                            <div>
                                <img src={googlePhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>
                        <div className='flex max-w-xs ml-16 mb-5 btn'>
                            <div>
                                <h2>Sign-in with Facebook</h2>
                            </div>
                            <div>
                                <img src={facebookPhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;