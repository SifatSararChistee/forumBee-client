import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Membership from "../Pages/Membership/Membership";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PostDetailsPage from "../Pages/PostDetailsPage/PostDetailsPage";
import AddPost from "../Pages/Dashboard/AddPost";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyPosts from "../Pages/Dashboard/MyPosts";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <h1>this is error</h1>,
      children:[
        {
            path: "/",
            element: <HomePage></HomePage>,
        },
        {
            path: "/membership",
            element: <Membership></Membership>,
        },
        {
            path: "/login",
            element: <LoginPage></LoginPage>,
        },
        {
            path: "/register",
            element:<Register></Register>,
        },
        {
            path: "/dashboard",
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path: "/dashboard",
                    element:<MyProfile></MyProfile>,
                },
                {
                    path: "/dashboard/myPosts",
                    element:<MyPosts></MyPosts>,
                },
                {
                    path: "/dashboard/addPost",
                    element:<AddPost></AddPost>,
                },
            ]
        },
        {
            path: "/posts/:id",
            element:<PostDetailsPage></PostDetailsPage>,
            loader: ({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
        },
      ]
    }
])
export default router;