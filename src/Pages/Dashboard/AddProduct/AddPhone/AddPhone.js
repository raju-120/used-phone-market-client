import React from 'react';/* 
import { AuthContext } from '../../../../Context/AuthProvider'; */
import { useForm } from 'react-hook-form';

const AddPhone = () => {
    const {register,handleSubmit} = useForm();
    /*const {user} = useContext(AuthContext); 
    const date = new Date().toLocaleString(); */


    const handleAddPhoneProduct = (data) =>{
        console.log(data.photo[0]);
        const photo= data.photo[0];
        const formData = new FormData();
        formData.append('photo',photo);
        console.log(formData.append('photo',photo));
        /* event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const photo = form.photo.value;
        const deviceName = form.phoneName.value;
        const usage = form.usage.value;
        const network = form.network.value;
        const sim = form.sim.value;
        const os = form.os.value;
        const chipset = form.chipset.value;
        const storage = form.storage.value;
        const camera = form.camera.value;
        const video = form.video.value;
        const selfie = form.selfie.value;
        const selfieVDO = form.selfieVDO.value;
        const usb = form.usb.value;
        const battery = form.battery.value;
        const color = form.color.value;
        
        const slots = [form.slot1.value,
                        form.slot2.value];
        
        const price = form.price.value;

        const sellingPhone = {
            sellerName: name,
            sellerEmail: email,
            sellerPhoneNumber: phone, 
            
            name: deviceName,
            usage,
            network,
            sim,
            os,
            chipset,
            storage,
            camera,
            video,
            selfie,
            selfieVDO,
            usb,
            battery,
            color,
            slots,
            price,
            postTime: date,
            photo
        }
        console.log(sellingPhone); */
        
    }
    return (
        <div className='mt-5 mb-5'>
            <div className="bg-base-200 rounded-xl mb-2">
                <h1 className="text-3xl p-5 font-bold text-center mb-5">Add the details about the Phone</h1>
                <div className="hero-content mb-5">
                    
                    <div className="card  w-full p-5 lg:max-w-full shadow-2xl bg-base-100 mb-5">
                        
                        <form onSubmit={handleSubmit(handleAddPhoneProduct)}> 
                            
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                                        
                                <input type="file" 
                                     
                                    { 
                                        ...register('photo',
                                                { 
                                                    required: 'photo required'
                                                }
                                            )
                                    }
                                    placeholder="full name"
                                    className="input input-bordered w-full p-2" readOnly/>
                                
                            </div>
                            <input className='btn mt-5 btn-primary  w-full mx-w-xs' value="Add Product" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AddPhone;