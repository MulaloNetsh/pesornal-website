import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SideBar from './routes/sidebar';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import ContactPage from './routes/Contacts';

const router = createBrowserRouter([
   {
    path: '/',
    element: <SideBar/>,
    children: [
      {
        path: 'home',
        element: <HomePage/>
      },
      {
        path: 'about',
        element: <AboutPage/>
      },
      {
        path: 'projects',
        element: <AboutPage/>
      },
      {
        path: 'contact',
        element: <ContactPage/>
      },
    ]
   }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
