import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllEips from "../Pages/AllEips/AllEips";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Insight from "../Pages/Insight/Insight";
import Status from "../Pages/Status/Status";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Type from "../Pages/Type/Type/Type";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allEips',
                element: <AllEips></AllEips>,
            },
            {
                path: '/type',
                element: <Type></Type>,
            },
            {
                path: '/status',
                element: <Status></Status>,
            },
            {
                path: '/insight',
                element: <Insight></Insight>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            }
        ]
    }
])

export default router;