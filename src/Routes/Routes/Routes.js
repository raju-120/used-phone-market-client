import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import CheckDetails from "../../Pages/CheckDetials/CheckDetails";

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
                path: '/details/:_id',
                element: <CheckDetails></CheckDetails>,
                loader: ({params}) =>fetch(`phones.json/${params._id}`)
            }
        ]
    }
])

export default router;