import React, { useState } from 'react';
import AddPhone from './AddPhone/AddPhone';
import AddSmartWatch from './AddSmartWatch/AddSmartWatch';
import AddTablet from './AddTablet/AddTablet';

const AddProduct = () => {

    const [select, setSelect] = useState({
        isAgree: false, //checkbox
    })

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
        <div className='ml-5'>
            <h2 className="text-3xl mb-5 bg-red-400 p-5 rounded-xl">Add a selling product</h2>
            <div>
                <h2 className='text-xl font-semibold'>Please select your product category.</h2>
                
                <div className='mt-5 lg:mx-56 grid grid-cols-1 lg:grid-cols-3'>
                
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
                    
                    
                </div>{/* 
                <h2>Selected method is: {select.selection}</h2> */}
                
                
            </div>
            {
                    select.selection === 'phone' &&
                    <AddPhone></AddPhone>
            }
            {
                    select.selection === 'tablet' &&
                    <AddTablet></AddTablet>
            }
            {
                select.selection === 'smart-watch' &&
                <AddSmartWatch></AddSmartWatch>
            }
        </div>
    );
};

export default AddProduct;