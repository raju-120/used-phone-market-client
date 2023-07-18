import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ResetPassword from "../../Pages/Login/ResetPassword";
import Appointment from "../../Pages/Appointment/Appointment";
import PhoneDetails from "../../Pages/Appointment/AvailableAppointment/PhoneDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AppointmentTablet from "../../Pages/Appointment/AppointmentTablet/AppointmentTablet";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <SignUp></SignUp>
            },
            {
                path:'/reset',
                element: <ResetPassword></ResetPassword>
            },
            {
                path:'/details/:_id',
                element: <PhoneDetails></PhoneDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/phoneCollections/${params._id} `)
            },
            {
                path:'/appointment',
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
                
            },
            {
                path: '/appointmenttab',
                element: <AppointmentTablet></AppointmentTablet>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
    }
])

export default router;