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

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
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