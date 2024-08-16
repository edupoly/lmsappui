import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Login from './features/login/login';
import Signup from './features/signup/signup';
import Dashboard from './features/dashboard/Dashboard';
import Topics from './features/courses/Topics';
import Createcohort from './features/addcohort/Createcohort';
import Viewallcohorts from './features/viewallcohorts/Viewallcohorts';
import Adduserstocohort from './features/adduserstocohort/Adduserstocohort';
import Addcohortstouser from './features/viewusers/addcohortstouser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children:[
          {
            path:"/dashboard/createcohort",
            element: <Createcohort></Createcohort>
          },
          {
            path: '/dashboard/signup',
            element: <Signup></Signup>
          },
          {
            path: '/dashboard/viewallcohorts',
            element: <Viewallcohorts></Viewallcohorts>
          },
          {
            path: '/dashboard/:cohortId/addusers',
            element: <Adduserstocohort></Adduserstocohort>
          },
          {
            path: '/dashboard/viewusers',
            element: <Addcohortstouser />
          }
        ]
      },
      {
        path: '/viewtopics',
        element: <Topics></Topics>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

