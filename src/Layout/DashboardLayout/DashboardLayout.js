import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../UseHooks/UseAdmin/useAdmin";
import { AuthContext } from "../../Context/AuthProvider";
import useSeller from "../../UseHooks/useSeller/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const menuItems = (
    <React.Fragment>
      <li className="mb-2 mt-10 text-lg bg-yellow-400 rounded-lg">
        <Link to="/dashboard">My Appointment</Link>
      </li>
      {isAdmin && (
        <>
          <li className="mb-2 text-lg bg-yellow-400 rounded-lg">
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li className="mb-2 text-lg bg-yellow-400 rounded-lg">
            <Link to="/dashboard/complain">All Complain</Link>
          </li>
        </>
      )}

      {isSeller && (
        <>
          <li className="mb-2 text-lg bg-yellow-400 rounded-lg">
            <Link to="/dashboard/addProduct">Add Product</Link>
          </li>
          <li className="mb-2 text-lg bg-yellow-400 rounded-lg">
            <Link to="/dashboard/myallProduct">My Added Product</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col justify">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-8 w-72 h-full bg-gray-300 rounded-lg text-base-content">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
