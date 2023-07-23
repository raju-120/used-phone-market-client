import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {

    const menuItems = <React.Fragment>
                            <li className='mb-2 mt-10 text-lg'><Link to='/dashboard'>My Appointment</Link></li>
                            <li className='mb-2 text-lg'><Link to='/dashboard/users'>Users Collection</Link></li>
                    </React.Fragment>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-8 w-72 h-full bg-base-200 text-base-content">
                        {menuItems}
                        
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;