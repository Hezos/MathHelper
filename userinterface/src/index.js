import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { MultiplicationPage } from './components/MultiplicationPage';
import { DivisionPage } from './components/DivisionPage';
import { NumberLinePage } from './components/NumberLinePage';
import { AdditionPage } from './components/AdditionPage';
import { SubstractionPage } from './components/SubstractionPage';
import { ExponentiationPage } from './components/ExponentiationPage';
import { FractionPage } from './components/FractionPage';
import { FactorialPage } from './components/FactorialPage';
import { VariablePage } from './components/VariablePage';
import UnderdevelopmentPage, { UnderDevelopmentPage } from './components/UnderdevelopmentPage';
import { SquarerootPage } from './components/SquarerootPage';
import { EquationPage } from './components/EquattionPage';


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
  {
    path: "/Numberline",
    element: <NumberLinePage/>
  },
  {
    path: "/Addition",
    element: <AdditionPage/>
  },
  {
    path: "/Substraction",
    element: <SubstractionPage/>
  },
  {
    path: "/Exponentiation",
    element: <ExponentiationPage/>
  },
  {
    path: "/Fraction",
    element: <FractionPage/>
  },
  {
    path: "/Factorial",
    element: <FactorialPage/>
  },
  {
    path: "/Variable",
    element: <VariablePage/>
  },
  {
    path: "/Squareroot",
    element: <SquarerootPage/>
  },
  {
    path: "/Equations",
    element: <EquationPage/>
  },
  {
    path: "/Areacalculation",
    element: <UnderdevelopmentPage/>
  },
  {
    path: "/Series",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Percentage",
    element: <UnderdevelopmentPage/>
  },
  {
    path: "/SineCosine",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Surfacevolumecalculations",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Coordinatesystem",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Charts",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Functions",
    element: <UnderDevelopmentPage/>
  },
  {
    path: "/Logarithms",
    element: <UnderDevelopmentPage/>
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
