import React from 'react';
import MyPhone from './MyPhone/MyPhone';

const MyAllProduct = () => {
    return (
        <div >
            <div className='bg-green-500 p-5'>
                <h2 className='text-3xl font-semibold text-center'>My all added product</h2>
                
            </div>
            <div className='divider text-xl mt-5'>All Phone Section</div>
            <div>
                <MyPhone></MyPhone>
            </div>
        </div>
    );
};

export default MyAllProduct;