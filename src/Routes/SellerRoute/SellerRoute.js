import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../UseHooks/useSeller/useSeller';

const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email)
    const location = useLocation();

    if(loading || isSellerLoading){
        return <progress className="progress w-56"></progress>;
    }
    if(user && isSeller){
        return children;
    }
    return <Navigate to='/dashboard' state={{from: location}} replace></Navigate>
};

export default SellerRoute;