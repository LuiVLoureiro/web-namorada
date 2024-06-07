import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import LoginPage from './Pages/Login/LoginPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ClientRegister from './Pages/ClientRegister/ClientRegister';
import ModelRegister from './Pages/ModelRegister/ModelRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/client-register',
    element: <ClientRegister />
  },
  {
    path: '/model-register',
    element: <ModelRegister />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
