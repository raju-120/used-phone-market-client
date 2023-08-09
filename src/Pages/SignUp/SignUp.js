import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import googlePhoto from '../../assets/logo/Google__G__Logo.svg.webp';
import facebookPhoto from '../../assets/logo/Facebook_f_logo_(2021).svg.png';
import useToken from '../../UseHooks/UseToken/useToken';
import useTitle from '../../UseHooks/UseTitle/UseTitle';
import { AiOutlineEyeInvisible } from "react-icons/ai";


const SignUp = () => {

    useTitle('SignUp')
    const { register,formState: {errors} ,handleSubmit } = useForm();
    const {createUser , updateUser,googleLogin,facebookLogin } = useContext(AuthContext);
    const navigate= useNavigate();

    /* const [createdEmail,setCreatedEmail] = useState(''); */
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail,setCreatedUserEmail] = useState('');
    const [visible,setVisible] = useState("");
    const [password,setPassword] = useState("");
    const [token] = useToken(createdUserEmail);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }


    const handleSignup= (data)=>{
        
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully');
                
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() =>{
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err =>{
                console.log(err);
            })

            const saveUser = (name, email) =>{
                const user = {name, email};
                
                fetch('https://used-product-server-raju-120.vercel.app/emailusers',{
                    method:'POST',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                .then( res => res.json())
                .then( data => {
                    setCreatedUserEmail(email); 
                    console.log(data);
                })
            }
    } 

    
 
    const handleGoogleLogIn= () =>{
        googleLogin()
            .then(result =>{
                const user = result.user;
                const currentUser ={
                    name: user.displayName,
                    email: user.email,
                }
                fetch('https://used-product-server-raju-120.vercel.app/emailusers',{
                    method:'POST',
                    headers: {
                        'content-type' : 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                .then( res => res.json())
                .then( data => {
                    console.log(data);
                    toast.success('Successfully user created with Google');
                    navigate('/');
                })
                
                
            })
            .catch(err => console.error(err))
    }

    /* const handleFaceBookLogIn = () =>{
        facebookLogin()
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('Successfully user signUp with Facebook.')
            })
            .catch(err => console.error(err))
    } */ 

    return (
        <div>
            <div className="bg-base-200 rounded-xl">
                <h1 className="text-5xl font-bold text-center mb-5">Register now as a Buyer</h1>
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
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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

                            <input className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition duration-300 ease-in-out' value="Sign Up" type="submit" />
                            
                            {signUpError && <p className='text-red-500'>{signUpError}</p>}
                        
                        </form>
                        
                        <p className='ml-8 mb-4'>Already registered? Please <Link to='/login' className='text-xl font-bold text-info'>Login</Link> </p>
                        
                        <div onClick={handleGoogleLogIn} className='flex max-w-md mb-2 btn'>
                            <div>
                                <h2>Sign-up with Google</h2>
                            </div>
                            <div>
                                <img src={googlePhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>

                        {/* <div onClick={handleFaceBookLogIn} className='flex max-w-md mb-5 btn'>
                            <div>
                                <h2>Sign-up with Facebook</h2>
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

export default SignUp;