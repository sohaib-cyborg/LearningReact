import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Aboutus from "./pages/aboutUs";
import Error from "./pages/Error";
import Resdata from "./pages/RestaurantData";
import { Provider } from "react-redux";
import AppStore from "../utils/appstore";
import Cart from "./pages/cart";
import ContactUs from "./pages/contactUs";

const Applayout=()=>{
    return(
        <Provider store={AppStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            
        </div>
        </Provider>
 
    );
}
const Grocery = lazy(()=>import("./pages/Grocery"));
const app = createBrowserRouter([
    {
     path:"/",
     element:<Applayout/>,
    children:[
        {
          path:"/",
          element:<Body/>,  
        },
        {
            path:"/about",
            element:<Aboutus/>,
        },
        {
            path:"/restaurant/:resid",
            element:<Resdata/>,
        },
        {
            path:"/cart",
            element:<Cart/>,
        },
        {
            path:"/contactus",
            element:<ContactUs/>,
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Wait while Grocery loads</h1>}><Grocery/></Suspense>
        }
    ],
     errorElement:<Error/>
    },
    
]);



root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={app}/>);