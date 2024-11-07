import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogout = () => {
    LogOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const itemsMenu = (
    <React.Fragment>
      <li>
        <Link to="/" className="text-xl text-white lg:text-black">
          Home
        </Link>
      </li>
      <li>
        <Link to="/appointment" className="text-xl text-white lg:text-black">
          Phone
        </Link>
      </li>
      <li>
        <Link to="/appointmenttab" className="text-xl text-white lg:text-black">
          Tablet
        </Link>
      </li>
      <li>
        <Link
          to="/watchappointment"
          className="text-xl text-white lg:text-black"
        >
          Watch
        </Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard" className="text-xl text-white lg:text-black">
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              SignOut
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold my-2 text-md rounded-full shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Login
          </Link>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-200 mt-2 mb-2 flex justify-between rounded print:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content z-[4] bg-slate-600 mt-3 p-2 w-56 rounded-xl"
          >
            {itemsMenu}
          </ul>
        </div>
        <Link to="/">
          <div className="flex">
            <div>
              <img
                src={logo}
                className="py-3"
                style={{ width: "60px" }}
                alt="logo.jpg"
              />
            </div>
            <div>
              <h2 className="ml-3 text-xl font-bold lg:py-5">Resale Market</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{itemsMenu}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
