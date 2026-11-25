
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import NotFoundPage from './component/NotFoundPage';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Resturant from './pages/Resturant';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/auth/Profile';

const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'resturant',
          element: <Resturant />,
        },
        {
          path: 'resturant/:id',
          element: <Resturant />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
  ],
  {
    basename: '/FoodHub',
  }
);

export default Router;
