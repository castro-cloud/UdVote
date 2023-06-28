import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Home } from "./pages/home";
import { Otp} from "./pages/otp";
import { Category } from "./pages/category";
import { Contestant } from "./pages/contestant";
import { Results } from "./pages/results";
import { Statistics } from "./pages/statistics";
import { ViceContestant } from "./pages/viceContestant";
import { CollegeContestant } from './pages/collegeContestant';
import { ChairContestant } from './pages/chairContestant';
import { GsContestant } from './pages/gsContestant';
import { MpContestant } from './pages/mpContestant';
import { SsContestant } from './pages/ssContestant';




const router = createBrowserRouter([
  // {
  //   path: "",
  //   element: <App/>,
  // },

  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "otp",
    element: <Otp/>,
  },

  {
    path: "category",
    element: <Category/>,
  },

  {
    path: "contestant",
    element: <Contestant/>,
  },

  {
    path: "results",
    element: <Results/>,
  },

  {
    path: "statistics",
    element: <Statistics/>,
  },

  {
    path: "vcontestant",
    element: <ViceContestant/>,
  },

  {
    path: "collegecontestant",
    element: <CollegeContestant/>,
  },

  {
    path: "chaircontestant",
    element: <ChairContestant/>,
  },

  {
    path: "gscontestant",
    element: <GsContestant/>,
  },

  {
    path: "mpcontestant",
    element: <MpContestant/>,
  },

  {
    path: "sscontestant",
    element: <SsContestant/>,
  },
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
