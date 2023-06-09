import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';

const PhonesDetails = ({selectedDate,setSelectedDate}) => {


    const {name,photo,price,usage,camera,chipset,color,network,
        os,selfie,selfieVDO,sim,storage,usb,video,battery} = useLoaderData();

    return (
        <div className='mt-5'>
            <div className="card flex flex-col-row lg:card-side bg-base-200 shadow-xl">
                <figure>
                    <img style={{width: '70%',padding: '15px'}} src={photo} alt="Phone"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-5xl">{name}</h2>
                    <p className='mt-2 text-xl'>Price: <span className='font-bold text-indigo-500'>{price}</span> Tk</p>
                            
                    <div className='lg:flex justify-between'>
                        <div >
                            <p>Used: <span className='text-xl font-bold'>{usage}</span></p>
                        </div>
                        
                        {/* Meeting Appointment section  */}

                        <div className='lg:mr-14'>
                            <h3 className='text-xl font-semibold'>Pick a date for booking a meeting.</h3>
                            
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />

                            <p>You have selected date: {format(selectedDate, 'PP')}</p>

                            <div className="card-actions mt-5 ">
                                <label htmlFor="booking-modal" className="btn btn-primary">Booking a Meeting</label>
                            </div>

                        </div>
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
        </div>
    );
};

export default PhonesDetails;