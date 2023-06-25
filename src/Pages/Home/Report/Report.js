import React from 'react';

const Report = () => {
    return (
        <div className='mt-5'>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center mt-3 mb-5">
                        <h1 className="text-5xl font-bold">Let us know your complain.</h1>
                    </div>
                    <div className="mb-5 card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Complain Box</span>
                                </label>
                                <textarea placeholder="complain-box" className="textarea textarea-bordered textarea-xl w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary">Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;