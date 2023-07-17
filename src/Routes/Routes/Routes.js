import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ResetPassword from "../../Pages/Login/ResetPassword";
import Appointment from "../../Pages/Appointment/Appointment";
import PhoneDetails from "../../Pages/Appointment/AvailableAppointment/PhoneDetails";

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
                element: <Appointment></Appointment>
                
            }
        ]
    }
])

export default router;