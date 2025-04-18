import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { MultiplicationPage } from './components/MultiplicationPage';
import { DivisionPage } from './components/DivisionPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App />
  },
  {
    path: "/Multiplication",
    element:
        <MultiplicationPage/>
  },
  {
    path: "/Division",
    element: <DivisionPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
