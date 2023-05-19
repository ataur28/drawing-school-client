import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home/Home/Home";
import AllDolls from "../pages/AllDolls/AllDolls";
import Blog from "../pages/Blog/Blog";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import DollDetails from "../pages/Home/DollDetails/DollDetails";
import Login from "../pages/Login/Login";


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
                element: <AllDolls></AllDolls>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/subDolls/:subDollsId',
                element: <DollDetails></DollDetails>,
                loader: ({ params }) => fetch('dolls.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '*',
                element: <ErrorElement></ErrorElement>
            }

        ]
    },
]);

export default router;
