import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddTablet = () => {
    const {register,handleSubmit} = useForm();
    const {user} = useContext(AuthContext); 
    const date = new Date().toLocaleString();  

    const navigate = useNavigate(); 
    const imageHostKey = process.env.REACT_APP_imgBB_KEY;
    


    const handleAddTabletProduct = (data) =>{
        
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success)
            {
                console.log(imgData.data.url);
                const addProduct = {
                    sellerName : data.SellerName,
                    sellerEmail: data.email,
                    sellerTabletNumber: data.contact,
                    name: data.name,
                    usage: data.usage,
                    network: data.network,
                    sim: data.sim,
                    os: data.os,
                    chipset:data.chipset,
                    storage: data.storage,
                    camera: data.camera,
                    video: data.video,
                    selfie: data.selfie,
                    selfieVDO: data.selfieVDO,
                    usb: data.usb,
                    battery: data.battery,
                    color: data.color,
                    price: data.price,
                    slots: [
                        data.slot1,
                        data.slot2
                    ],
                    photo: imgData.data.url,
                    postTime: date
                }
                fetch('https://used-product-server-raju-120.vercel.app/tabCollections',{
                    method: 'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(addProduct)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} Tablet selling product successfully added.`)
                    navigate('/dashboard')
                })
            }
        })
        
        
        
        
    }
    return (
        <div className='mt-5 mb-5'>
            <div className="bg-base-200 rounded-xl mb-2">
                <h1 className="text-3xl p-5 font-bold text-center mb-5">Add the details about the Tablet</h1>
                <div className="hero-content mb-5">
                    
                    <div className="card  w-full p-5 lg:max-w-full shadow-2xl bg-base-100 mb-5">
                        
                        <form onSubmit={handleSubmit(handleAddTabletProduct)}> 
                            
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5'>
                                        
                                
                                <input type="text" 
                                    defaultValue={user?.displayName} 
                                    { 
                                        ...register('SellerName',
                                                { 
                                                    required: 'Seller-Name required'
                                                }
                                            )
                                    }
                                    placeholder="full name"
                                    className="input input-bordered w-full" readOnly/>
                                
                                <input type="text"
                                    defaultValue={user?.email}
                                    { 
                                        ...register('email',
                                                { 
                                                    required: 'email required'
                                                }
                                            )
                                    }
                                    placeholder="Email" className="input input-bordered w-full" readOnly/>
                                
                                <input type="text" 
                                    { 
                                        ...register('contact',
                                                { 
                                                    required: 'Seller-Contact-number required'
                                                }
                                            )
                                    }
                                placeholder="My-contact-number" className="input input-bordered w-full"/>
                                    
                                <input type="text" 
                                    { 
                                        ...register('name',
                                                { 
                                                    required: 'Tablet-Name required'
                                                }
                                            )
                                    }
                                placeholder='Tablet Name'  className="input input-bordered w-full "/>

                                <input type="text"
                                    { 
                                    ...register('usage',
                                            { 
                                                required: 'Tablet-Used-Time required'
                                            }
                                        )
                                    } 
                                placeholder='Used-Time'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                    { 
                                    ...register('network',
                                            { 
                                                required: 'Network-Support required'
                                            }
                                        )
                                    }
                                    placeholder='Network-Support'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                    { 
                                    ...register('sim',
                                            { 
                                                required: 'Sim-type-Support required'
                                            }
                                        )
                                    } 
                                placeholder='sim-type'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                { 
                                ...register('os',
                                        { 
                                            required: 'Tablet-OS-version required'
                                        }
                                    )
                                }
                            placeholder='Tablets-OS'  className="input input-bordered w-full " required/>
                                
                                <input type="text" 
                                { 
                                ...register('chipset',
                                        { 
                                            required: 'Tablet-Chipset required'
                                        }
                                    )
                                } 
                            placeholder='Tablets-Chipset'  className="input input-bordered w-full " required/>
                        
                                <input type="text" 
                                { 
                                ...register('storage',
                                        { 
                                            required: 'RAM & ROM info required'
                                        }
                                    )
                                } 
                            placeholder='Internal-Storage & RAM'  className="input input-bordered w-full " required/>
                        
                                <input type="text"
                            { 
                                ...register('camera',
                                        { 
                                            required: 'Rare camera info required'
                                        }
                                    )
                                }
                            placeholder='Rear-Camera'  className="input input-bordered w-full " required/>
                        
                                <input type="text"  
                                { 
                                ...register('video',
                                        { 
                                            required: 'Rare-Camera-Video-info required'
                                        }
                                    )
                                }
                            placeholder='Rear-Camera-Video'  className="input input-bordered w-full " required/>
                        
                                <input type="text"  
                            { 
                                ...register('selfie',
                                        { 
                                            required: 'Selfie-Camera-info required'
                                        }
                                    )
                                }
                            placeholder='Selfie-Camera'  className="input input-bordered w-full " required/>

                                <input type="text"  
                                    { 
                                    ...register('selfieVDO',
                                            { 
                                                required: 'Selfie-Camera-Video-Info required'
                                            }
                                        )
                                    }
                                placeholder='Selfie-Camera-Video'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                    { 
                                    ...register('usb',
                                            { 
                                                required: 'USB-Type required'
                                            }
                                        )
                                    }
                                placeholder='USB-Type'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                    { 
                                    ...register('battery',
                                            { 
                                                required: 'Tablet-Battery-Info required'
                                            }
                                        )
                                    }
                                placeholder='Battery'  className="input input-bordered w-full " required/>
                            
                                <input type="text" 
                                { 
                                ...register('color',
                                        { 
                                            required: 'Tablet-Color required'
                                        }
                                    )
                                }
                            placeholder='Tablet-Color'  className="input input-bordered w-full " required/>

                                <input type="text" 
                                { 
                                    ...register('price',
                                            { 
                                                required: 'Tablet-Price required'
                                            }
                                        )
                                    }
                                placeholder='Price'  className="input input-bordered w-full " required/>
                            
                                <div className='flex justify-between'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Example: meeting place address - (Time)</span>
                                        </label>
                                        <input type="text" 
                                        { 
                                            ...register('slot1',
                                                    { 
                                                        required: 'Place-&-Time-Slot required'
                                                    }
                                                )
                                            } placeholder='Meeting-Place & Time-Slot-1'  className="input input-bordered w-full " required/>
                                    </div>
                                    
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Example: meeting place address - (Time)</span>
                                        </label>
                                        <input type="text"
                                        { 
                                            ...register('slot2',
                                                    { 
                                                        required: 'Place-&-Time-Slot required'
                                                    }
                                                )
                                            } placeholder='Meeting-Place & Time-Slot-2'  className="input input-bordered w-full " required/>
                                    </div>
                                    
                                </div>

                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Picture resolution must-be (758P * 480P) or less-then(100KB)</span>
                                        </label>
                                        <input type="file" 
                                     
                                        { 
                                            ...register('image',
                                                    { 
                                                        required: 'photo required'
                                                    }
                                                )
                                        }
                                    
                                    className="input input-bordered w-full p-2" readOnly/>
                                
                                </div> 
                            </div>

                            <input className='btn mt-5 btn-primary  w-full mx-w-xs' value="Add Product" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTablet;