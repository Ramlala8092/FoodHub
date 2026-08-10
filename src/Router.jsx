import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Dashboard from './pages/Dashboard';
import NotFoundPage from "./component/NotFoundPage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Resturant from './pages/Resturant';
import Offerrs from './pages/Offerrs';
import About from "./pages/About";
import Contact from "./pages/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/resturant",
                element: <Resturant />,
            },
            {
                path: "/resturant/:id",
                element: <Resturant />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default Router
