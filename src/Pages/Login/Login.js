import React, { useContext, useState } from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import pic from '../../assets/images/login.jpg';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import googlePhoto from '../../assets/logo/Google__G__Logo.svg.webp';
import useTitle from '../../UseHooks/UseTitle/UseTitle';
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {

    useTitle('Login');
    const {register,formState:{errors} ,handleSubmit}= useForm();
    const {signIn,googleLogin} = useContext(AuthContext)
    
    const [loginError, setLoginError] = useState('');
    const [visible,setVisible] = useState("");
    const [password,setPassword] = useState("");
    const location = useLocation();
    const navigate= useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = (data) =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                toast.success('Login successfully');
                navigate(from, {replace: true} );
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
                toast.success('Successfully user login with Google');
                navigate('/');
            })
    }

    /* const handleFaceBookLogIn = () =>{
        facebookLogin() 
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast('Successfully user login with Facebook.');
                navigate('/') 
            })
    }
 */
    

    return (
        <div>
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-5xl font-bold text-center mb-5">Login Now</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">

                        <img src={pic} className='rounded-lg' /* style={{width: '75%'}} */ alt="" />
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

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        type={visible ? "text" : "password"}
                                        name="password"
                                        autoComplete="current-password"
                                        required
                                        
                                        onChange={(e) => setPassword(e.target.value)}
                                        {
                                            
                                            ...register('password',{
                                                
                                                required: 'password required',/* 
                                                minLength: {value:6, message:'Password must be 6 character'}, */
                                                pattern: {/* value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, */ message: 'Password must have uppercase, number and special characters'}
                                            })
                                        }
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {visible ? (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                    ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                    )}

                                <label className="label">
                                    <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                
                                {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                                
                                </div>
                            
                            </div>

                            <input className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition duration-300 ease-in-out' value="Login" type="submit" />
                            
                            <div>
                                
                                 {
                                    loginError && <p className='text-red-500'>{loginError}</p>
                                }
                            </div>
                            

                        </form>
                        
                        <p className='ml-8 mb-5 '>New to used-phone? Please <Link to='/SelectSignUpRole' className='text-xl font-bold text-info'>SignUp</Link> </p>
                        
                        {/* Other platform  login with  */}

                        <div onClick={handleGoogleLogIn} className='flex max-w-md mb-2 btn'>
                            <div>
                                <h2>Sign-in with Google</h2>
                            </div>
                            <div>
                                <img src={googlePhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>

                        {/* <div onClick={handleFaceBookLogIn} className='flex max-w-md mb-5 btn'>
                            <div>
                                <h2>Sign-in with Facebook</h2>
                            </div>
                            <div>
                                <img src={facebookPhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div> */}
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;