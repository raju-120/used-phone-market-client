import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const ComplainModal = ({report,name,closeModal}) => {

    const {device} = report;

    const {user} = useContext(AuthContext);
    const handleComplain = (event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const report = form.report.value;

        const complained ={
            deviceName: name,
            userName,
            email,
            report,
        }
        console.log(complained);
        fetch('http://localhost:5000/complains',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(complained)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data.acknowledged)
            {
                closeModal();
                toast.success('Your Complained successfully posted');
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="complain-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                <label htmlFor="complain-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <h3 className="font-bold text-lg">Complain for {name}</h3>
                    
                    <form onSubmit={handleComplain} className='grid grid-cols-1 gap-3 mt-10'> 
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full " required/>
                        <input name='email'  disabled defaultValue={user?.email} type="text" placeholder="Email" className="input input-bordered w-full " required/>
                        
                        <textarea name='report' placeholder="Write you complain" className="textarea textarea-bordered textarea-md w-full max-w-lg" ></textarea>
                        
                        <br />
                        
                        <input className='w-full  btn btn-accent' type="submit" value='submit'/> 
                        {/* <button onClick={closeModal} className='btn btn-outline'>Complain</button> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComplainModal;