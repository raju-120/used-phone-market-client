import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AvailablePhones from "../../Pages/AvailablePhones/AvailablePhones";
import Appointment from "../../Pages/Appointments/Appontments/Appointment";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/availablePhones',
                element: <AvailablePhones></AvailablePhones>
            },
            {
                path:'/details/:_id',
                element: <Appointment></Appointment>,
                loader: ({params}) => fetch(`http://localhost:5000/phoneCollections/${params._id} `)
            }
        ]
    }
])

export default router;