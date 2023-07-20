import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ResetPassword from "../../Pages/Login/ResetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AppointmentTablet from "../../Pages/Appointment/AppointmentTablet/AppointmentTablet";
import Appointment from "../../Pages/Appointment/AppointmentPhone/Appointment";
import PhoneDetails from "../../Pages/Appointment/AppointmentPhone/AvailableAppointment/PhoneDetails";
import TabletDetails from "../../Pages/Appointment/AppointmentTablet/AvailableAppointmentTablet/TabletDetails";
import AppointmentWatch from "../../Pages/Appointment/AppointmentWatch/AppointmentWatch";

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
                element: <PhoneDetails></PhoneDetails> ,
                loader: ({params}) => fetch(`http://localhost:5000/phoneCollections/${params._id} `)
            },
            {
                path:'/appointment',
                element: <PrivateRoute> <Appointment></Appointment> </PrivateRoute>
                
            },
            {
                path: '/appointmenttab',
                element: <AppointmentTablet></AppointmentTablet>
            },
            {
                path: '/tabDetails/:_id',
                element: <TabletDetails></TabletDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/tabCollections/${params._id} `)
            },
            {
                path: '/watchappointment',
                element: <AppointmentWatch></AppointmentWatch>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>
    }
])

export default router;