import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';
import useToken from '../../../../UseHooks/UseToken/useToken';
import useTitle from '../../../../UseHooks/UseTitle/UseTitle';

const SellerSignUp = () => {
    
    useTitle('SellerSignUp');
    const { register,formState: {errors} ,handleSubmit } = useForm();
    const {createUser , updateUser } = useContext(AuthContext);
    const navigate= useNavigate();

    /* const [createdEmail,setCreatedEmail] = useState(''); */
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail,setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }


    const handleSignup= (data)=>{
        console.log(data.name, data.email,data.role);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully');
                
                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() =>{
                        saveUser(data.name, data.email,data.role)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err =>{
                console.log(err);
            })

            const saveUser = (name, email,role) =>{
                const user = {name, email,role};
                
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
                    /* navigate('/');
                    console.log(data); */

                })
            }
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
                                    <span className="label-text">Role of a work</span>
                                </label>
                                <select { ...register('role',{required: 'Role required'})} className="select select-bordered w-full">
                                    
                                        <option>seller</option>
                                </select>
                                
                            
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

                            <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                            {signUpError && <p className='text-red-500'>{signUpError}</p>}
                        </form>
                        
                        <p className='ml-8 mb-4'>Already registered? Please <Link to='/login' className='text-xl font-bold text-info'>Login</Link> </p>
                        
                        {/* <div onClick={handleGoogleLogIn} className='flex max-w-md mb-2 btn'>
                            <div>
                                <h2>Sign-up with Google</h2>
                            </div>
                            <div>
                                <img src={googlePhoto} style={{width: '25px'}} alt="" />
                            </div>
                        </div>

                        <div onClick={handleFaceBookLogIn} className='flex max-w-md mb-5 btn'>
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

export default SellerSignUp;