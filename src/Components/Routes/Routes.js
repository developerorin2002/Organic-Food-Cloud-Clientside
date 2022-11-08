import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Details from "../Pages/Details/Details";
import Home from '../Pages/Home/Home'
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Review from "../Pages/Review/Review";
import Services from "../Pages/Services/Services";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])