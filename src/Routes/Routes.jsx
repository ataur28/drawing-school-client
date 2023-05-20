import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home/Home/Home";
import AllDolls from "../pages/AllDolls/AllDolls";
import Blog from "../pages/Blog/Blog";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import DollDetails from "../pages/Home/DollDetails/DollDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddDoll from "../pages/AddDoll/AddDoll";
import MyDolls from "../pages/MyDolls/MyDolls";
import AllMyDolls from "../pages/AllMyDolls/AllMyDolls";
import PrivateRoute from "./PrivateRoute";
import UpdateDollData from "../pages/UpdateDollData/updateDollData";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allDolls',
                element: <PrivateRoute><AllDolls></AllDolls></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/subDolls/:subDollsId',
                element: <DollDetails></DollDetails>,
                loader: ({ params }) => fetch('http://localhost:5000/dolls')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addDoll',
                element: <PrivateRoute><AddDoll></AddDoll></PrivateRoute>,
            },
            {
                path: '/myDoll',
                element: <PrivateRoute><MyDolls></MyDolls></PrivateRoute>,
                // loader: ({ params }) => fetch('http://localhost:5000/dolls')
            },
            {
                path: '/allMyDolls',
                element: <AllMyDolls></AllMyDolls>,
            },
            {
                path: '/updateDollData',
                element: <UpdateDollData></UpdateDollData>,
            },
            {
                path: '*',
                element: <ErrorElement></ErrorElement>
            }

        ]
    },
]);

export default router;
