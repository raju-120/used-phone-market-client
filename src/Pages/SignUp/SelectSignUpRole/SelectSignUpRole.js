import React from 'react';
import { Link } from 'react-router-dom';
import buyerLogo from '../../../assets/logo/buyerLogo.jpg';
import sellerLogo from '../../../assets/logo/sellerLogo.png';
import useTitle from '../../../UseHooks/UseTitle/UseTitle';

const SelectSignUpRole = () => {
    
    useTitle('SelectSignUp');
    return (
        <div className='mt-5 p-24 bg-base-300 rounded-3xl'> 
            <div>
                <h2 className='text-center text-4xl font-semibold'>Please select you'r role, when you are register.</h2>
                <div className='mt-16 flex justify-evenly'>
                    <div className='flex'>
                        <div>
                            <h2 className='text-xl font-bold'>Are your a buyer? <br />please <Link to='/buyerRegistration'> 
                                <span className='text-emerald-500 hover:text-sky-400 '>
                            Register .</span></Link></h2>
                        </div>
                        <div>
                            <img src={buyerLogo} style={{width:'30px', paddingTop: '30px', borderRadius:'50%'}} alt="" /> 
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <h2 className='text-xl font-bold'>Are your a Seller? <br />please <Link to='/sellerRegistration'> 
                                <span className='text-emerald-500 hover:text-sky-400 '>
                            Register .</span></Link></h2>
                        </div>
                        <div>
                            <img src={sellerLogo} style={{width:'30px', paddingTop: '30px', borderRadius:'50%'}} alt="" /> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default SelectSignUpRole;