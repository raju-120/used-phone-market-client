import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import pic from '../../assets/images/login.jpg';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const {register,formState:{errors} ,handleSubmit}= useForm();

    const handleLogin=data =>{
        console.log(data)
        signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                toast('Login successfully');
            })
            .catch(err =>{
                console.log(err);
            })
    }

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
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New to used-phone? Please <Link to='/registration' className='text-xl font-bold text-info'>SignUp</Link> </p>
                        </form>

                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;