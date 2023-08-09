import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ResetPassword from "../../Pages/Login/ResetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AppointmentTablet from "../../Pages/Appointment/AppointmentTablet/AppointmentTablet";
import Appointment from "../../Pages/Appointment/AppointmentPhone/Appointment";
import PhoneDetails from "../../Pages/Appointment/AppointmentPhone/AvailableAppointment/PhoneDetails";
import TabletDetails from "../../Pages/Appointment/AppointmentTablet/AvailableAppointmentTablet/TabletDetails";
import AppointmentWatch from "../../Pages/Appointment/AppointmentWatch/AppointmentWatch";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import WatchDetails from "../../Pages/Appointment/AppointmentWatch/AvailableWatchAppointment/WatchDetails";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ComplainBox from "../../Pages/Dashboard/ComplainedBox/ComplainBox";
import AdminRoute from "../AdminRoute/AdminRoute";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import SelectSignUpRole from "../../Pages/SignUp/SelectSignUpRole/SelectSignUpRole";
import SellerSignUp from "../../Pages/SignUp/SelectSignUpRole/SellerSignUp/SellerSignUp";
import SignUp from "../../Pages/SignUp/SignUp";
import SellerRoute from "../SellerRoute/SellerRoute";
import MyAllProduct from "../../Pages/Dashboard/MyProduct/MyAllProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PaymentSuccess from "../../Pages/Dashboard/Payment/BkashPayment/PaymentSuccess";
import PaymentFailed from "../../Pages/Dashboard/Payment/BkashPayment/PaymentFail/PaymentFailed";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/SelectSignUpRole',
                element: <SelectSignUpRole></SelectSignUpRole>
            },
            {
                path: '/sellerRegistration',
                element: <SellerSignUp></SellerSignUp>
            },
            {
                path: '/buyerRegistration',
                element: <SignUp></SignUp>
            },
            {
                path:'/reset',
                element: <ResetPassword></ResetPassword>
            },
            {
                path:'/details/:_id',
                element: <PhoneDetails></PhoneDetails> ,
                loader: ({params}) => fetch(`https://used-product-server-raju-120.vercel.app/phoneCollections/${params._id} `)
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
                loader: ({params}) => fetch(`https://used-product-server-raju-120.vercel.app/tabCollections/${params._id} `)
            },
            {
                path: '/watchappointment',
                element: <AppointmentWatch></AppointmentWatch>
            },
            {
                path: '/watchDetails/:_id',
                element: <WatchDetails></WatchDetails>,
                loader: ({params}) => fetch(`https://used-product-server-raju-120.vercel.app/watchCollections/${params._id} `)
            },
            {
                path: '/sslPayment/success',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: '/sslPayment/fail',
                element: <PaymentFailed></PaymentFailed>
            }
        ]
    },
    
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/complain',
                element: <AdminRoute><ComplainBox></ComplainBox></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myallProduct',
                element: <SellerRoute> <MyAllProduct></MyAllProduct> </SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader:({params}) => fetch(`https://used-product-server-raju-120.vercel.app/booking/${params.id}`)
            }
        ]
    }
    
])

export default router;