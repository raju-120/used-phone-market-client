import React from 'react';
import { toast } from 'react-hot-toast';

const Report = () => {

    const handleComplain = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const report = form.report.value;


        const complained={
            email,
            report
        }

        fetch('http://localhost:5000/complains',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(complained)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged)
            {
                toast.success('Thank you for your complain.We will look forward it.')
                form.reset();
            }
        })
    }

    return (
        <div className='mt-5'>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center mt-3 mb-5">
                        <h1 className="text-5xl font-bold">Let us know about your complain.</h1>
                    </div>
                    <div className="mb-5 card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleComplain} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Complain Box</span>
                                </label>
                                <textarea name='report' placeholder="complain-box" className="textarea textarea-bordered textarea-xl w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;