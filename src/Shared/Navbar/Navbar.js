import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'

const Navbar = () => {

    const itemsMenu = <>
        <li><Link to='/' className='text-xl'>Home</Link></li>
        <li><Link className='text-xl'>Contract</Link></li>
        <li><Link className='text-xl'>About</Link></li>
        <li><Link className='text-xl'>Cart</Link></li>
        <li><Link to='/login' className='text-xl btn btn-primary'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-200 mt-2 flex justify-between rounded">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {itemsMenu}
                </ul>
                </div>
                <Link to='/'><img src={logo} style={{width: '60px'}} alt="logo.jpg" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {itemsMenu}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;
