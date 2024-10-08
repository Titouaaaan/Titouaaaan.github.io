import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider, } from "react-router-dom"
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "contact",
    element: <ContactPage/>
  },

  {
    path: "projects",
    element: <ProjectsPage/>
  },

  {
    path: "resume",
    element: <ResumePage/>
  }
])

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
