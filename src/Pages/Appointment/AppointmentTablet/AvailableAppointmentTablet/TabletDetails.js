import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ComplainModal from '../../../../Shared/CompainModal/ComplainModal';


const TabletDetails = () => {
    const {name,photo,price,usage,camera,chipset,color,network,
        os,selfie,selfieVDO,sim,storage,usb,video,battery,_id,postTime,sellerName,sellerPhoneNumber} = useLoaderData();

        
        const [report, setReport] = useState(null);
        const closeModal =() =>{
            setReport(null)
        }


    return (
        <div className='mt-5'>
            <div className="card flex flex-col-row lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img style={{width: '400px'}}  src={photo} alt="Phone"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-5xl">{name}</h2>
                    <p className='mt-2 text-xl'>Price: <span className='font-bold text-indigo-500'>{price}</span> Tk</p>
                            
                    <p>Used: <span className='text-xl font-bold'>{usage}</span></p>
                    
                    <div className='mb-5 flex justify-between'>
                        <div>
                            <p>Seller Name: <span className='text-xl font-bold'>{sellerName}</span></p>
                            <p>Contact-Number: <span className='text-xl font-bold'>{sellerPhoneNumber}</span></p>
                        </div>
                        <div>
                            <p>Posted at {postTime}</p>
                        </div>
                    </div>

                    <div>
                        <Link className='btn btn-primary' to='/appointmenttab'>Go to the Tablet section</Link>

                        <label  
                            htmlFor="complain-modal" 
                            className="btn btn-md btn-info flex-col lg:ml-14"
                            onClick={() => setReport(_id)}
                            >
                                Complain
                        </label>
                    </div>
                </div>

            </div>


            {/* Phone Full Specification */}

            <div className="divider"></div>
            <h2 className='text-3xl font-semibold'>Full Phone Specification</h2>
            <div className="divider"></div>
            
            <div className="overflow-x-auto bg-base-100 rounded-4xl">
                <table className="table table-zebra table-xs lg:table-lg table-pin-rows table-pin-cols">
                    
                    <thead>
                        <tr>
                            
                            <th className='text-2xl'>Name</th>
                            <th className='text-2xl'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr  className="hover">
                            <td>Phone Name : </td>
                            <td>{name}</td>   
                        </tr>
                        <tr className="hover">
                            <td>Network :</td>
                            <td>{network}</td>
                        </tr>
                        <tr className="hover">
                            <td>SIM :</td>
                            <td>{sim}</td>
                        </tr>
                        <tr className="hover">
                            <td>Operating-System :</td>
                            <td>{os}</td>
                        </tr>
                        <tr className="hover">
                            <td>Chipset :</td>
                            <td>{chipset}</td>
                        </tr>
                        <tr className="hover">
                            <td>Internal Storage :</td>
                            <td>{storage}</td>
                        </tr>
                        <tr className="hover">
                            <td>Main Camera :</td>
                            <td>{camera}</td>
                        </tr>
                        <tr className="hover">
                            <td>Rare Camera Video :</td>
                            <td>{video}</td>
                        </tr>
                        <tr className="hover">
                            <td>Selfie Camera :</td>
                            <td>{selfie}</td>
                        </tr>
                        <tr className="hover">
                            <td>Selfie Camera Video :</td>
                            <td>{selfieVDO}</td>
                        </tr>
                        <tr className="hover">
                            <td>USB :</td>
                            <td>{usb}</td>
                        </tr>
                        <tr className="hover">
                            <td>Battery Type :</td>
                            <td>{battery}</td>
                        </tr>
                        <tr className="hover">
                            <td>Phone Color :</td>
                            <td>{color}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                report && 
                <ComplainModal
                    report={report}
                    closeModal={closeModal}
                    name={name}
                ></ComplainModal>
            }
        </div>
    );
};

export default TabletDetails;