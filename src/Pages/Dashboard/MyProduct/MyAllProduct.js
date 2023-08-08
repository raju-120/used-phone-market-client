import React, { useState } from 'react';
import MyPhone from './MyPhone/MyPhone';
import MyTablet from './MyTablet/MyTablet';
import MySmartWatch from './MySmartWatch/MySmartWatch';
import useTitle from '../../../UseHooks/UseTitle/UseTitle';


const MyAllProduct = () => {

    useTitle('MyProduct');
    const [select,setSelect] = useState({
        isAgree: false,
    });

    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setSelect({
            ...select,
            [name] : value
        })
    }

    return (
        <div >
            <div className='bg-green-500 p-5'>
                <h2 className='text-3xl font-semibold text-center'>My all added product</h2>
                
            </div>
                <div className='divider text-xl mt-5 mb-5'>All Category Section</div>
                <div className='mt-10 mb-5 lg:ml-56 grid grid-cols-1 lg:grid-cols-3'>
                
                    <div className='flex'>
                        <input className='mx-2' type="radio" name='selection' value='phone' 
                            onChange={handleChange} checked={select.selection === 'phone'}/>
                        
                        <div className='flex'>
                            
                            <div className='py-1'>
                                <label>Phone</label>
                            </div>
                        </div>

                    </div>

                    <div className='flex'>
                        <input className='mx-2' type="radio" name='selection' value='tablet' 
                            onChange={handleChange} checked={select.selection === 'tablet'}/>
                        
                        <div className='flex'>
                            
                            <div className='py-1'>
                                <label>Tablet</label>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <input className='mx-2' type="radio" name='selection' value='smart-watch' 
                            onChange={handleChange} checked={select.selection === 'smart-watch'}/>
                        
                        <div className='flex'>
                            
                            <div className='py-1'>
                                <label>Smart Watch</label>
                            </div>
                        </div>

                    </div>
            </div>
                {
                    select.selection==="phone" &&
                    <MyPhone></MyPhone>
                }
                {
                    select.selection === "tablet" &&
                    <MyTablet></MyTablet>
                }
                {
                    select.selection === "smart-watch" &&
                    <MySmartWatch></MySmartWatch>
                }
        </div>
    );
};

export default MyAllProduct;