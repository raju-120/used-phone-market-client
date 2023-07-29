import React from 'react';
import { Link } from 'react-router-dom';

const SelectSignUpRole = () => {
    return (
        <div className='mt-5 p-24 bg-base-300 rounded-3xl'> 
            <div>
                <h2 className='text-center text-4xl font-semibold'>Please select you'r role, when you are register.</h2>
                <div className='mt-16 flex justify-evenly'>
                    <div>
                        <h2 className='text-xl font-bold'>Are your a buyer? <br />Then please go to the <Link to='/buyerRegistration'>  <span className='text-emerald-500 hover:text-sky-400 '>Buyer registration</span>  </Link>.</h2>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>Are your a seller? <br /> Then please go to the <Link to='/sellerRegistration'>  <span className='text-emerald-500 hover:text-sky-400 '>Seller registration</span>  </Link> .</h2>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default SelectSignUpRole;