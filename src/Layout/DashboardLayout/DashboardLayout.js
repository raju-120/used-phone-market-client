import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../UseHooks/UseAdmin/useAdmin';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    const menuItems = <React.Fragment>
                            <li className='mb-2 mt-10 text-lg bg-yellow-400 rounded-lg' ><Link to='/dashboard'>My Appointment</Link></li>
                            {
                                isAdmin && <>
                                    <li className='mb-2 text-lg bg-yellow-400 rounded-lg'><Link to='/dashboard/users'>All Users</Link></li>
                                    <li className='mb-2 text-lg bg-yellow-400 rounded-lg'><Link to='/dashboard/complain'>All Complain</Link></li>
                                    <li className='mb-2 text-lg bg-yellow-400 rounded-lg'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            
                                </>
                            } 
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
                    <ul className="menu p-8 w-72 h-full bg-sky-500 rounded-lg text-base-content">
                        {menuItems}
                        
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;