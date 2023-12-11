import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom"; 
import Women from './Components/Women'
import Men from './Components/Men'
import KidsBaby from './Components/KidsBaby'
import Utensils from './Components/Utensils';
import Handbag from './Components/Handbag';
import Shoes from './Components/Shoes';
import Jewelry from './Components/Jewelry';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/kids",
    element: <KidsBaby />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
  },
  {
    path: "/jewelry",
    element: <Jewelry />,
  },
  {
    path: "/accessories",
    element: <Handbag />,
  },
  {
    path: "/utensils",
    element: <Utensils />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
