import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import googlePhoto from '../../assets/logo/Google__G__Logo.svg.webp';
import facebookPhoto from '../../assets/logo/Facebook_f_logo_(2021).svg.png';


const SignUp = () => {

    const { register,formState: {errors} ,handleSubmit } = useForm();
    const {createUser , updateUser,googleLogin } = useContext(AuthContext);
    const navigate= useNavigate();

    const handleSignup= (data)=>{
        console.log(data);
        
        createUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');
                navigate('/');
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
                console.log(user);
            }
    } 

    const handleGoogleLogIn= () =>{
        googleLogin()
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast('Successfully user created with Google');
                navigate('/');
            })
            .catch(err => console.error(err))
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
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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
                                    {errors.password && <p className='text-red-500'> {errors.password?.message} </p>}
                                
                                

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                            <p>Already registered? Please <Link to='/login' className='text-xl font-bold text-info'>Login</Link> </p>
                        </form>
                        <div onClick={handleGoogleLogIn} className='flex max-w-xs ml-16 mb-2 btn'>
                            <div>
                                <h2>Sign-up with Google</h2>
                            </div>
                            <div>
                                <img src={googlePhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>
                        <div className='flex max-w-xs ml-16 mb-5 btn'>
                            <div>
                                <h2>Sign-up with Facebook</h2>
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

export default SignUp;