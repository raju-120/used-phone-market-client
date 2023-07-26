import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../UseHooks/UseAdmin/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/dashboard' state={{from: location}} replace></Navigate>
};

export default AdminRoute;