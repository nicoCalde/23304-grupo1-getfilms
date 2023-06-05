import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LayoutPublic from './layout/LayoutPublic';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/public/SignUp';
import Pricing from './pages/public/Pricing';
import LayoutPrivate from './layout/LayoutPrivate';
import UserHome from './pages/private/UserHome';


const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },{ path:'/plans', element:<Pricing/>}
        ],
    },
    {
        path: "/app",
        element: <LayoutPrivate />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <UserHome /> },
            { path: '/app/pepe', element: <Home /> }
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;