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
import CommentsPage from "../Pages/Dashboard/commentsPage";
import AdminProfile from "../Pages/Dashboard/Admin Dashboard/AdminProfile";
import ManageUser from "../Pages/Dashboard/Admin Dashboard/ManageUser";
import Announcement from "../Pages/Dashboard/Admin Dashboard/Announcement";
import ReportedComments from "../Pages/Dashboard/Admin Dashboard/ReportedComments";
import PrivateRoute from "../Routes/PrivateRoute"
import AdminRoute from "./AdminRoute";

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
            element: <><PrivateRoute><Membership></Membership></PrivateRoute></>,
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
            path: "/posts/:id",
            element:<PostDetailsPage></PostDetailsPage>,
            loader: ({params})=>fetch(`http://localhost:5000/posts/${params.id}`)
        },
        {
            path: "/comments/:postId",
            element:<CommentsPage></CommentsPage>,
        },
        {
            path: "/dashboard",
            element:<><PrivateRoute><Dashboard></Dashboard></PrivateRoute></>,
            children:[
                {
                    path: "/dashboard/userProfile",
                    element:<MyProfile />,
                },
                {
                    path: "/dashboard/myPosts",
                    element:<MyPosts></MyPosts>,
                },
                {
                    path: "/dashboard/addPost",
                    element:<AddPost></AddPost>,
                },
                {
                    path: "/dashboard/adminProfile",
                    element:<><AdminRoute><AdminProfile></AdminProfile></AdminRoute></>,
                },
                {
                    path: "/dashboard/manageUsers",
                    element:<><AdminRoute><ManageUser></ManageUser></AdminRoute></>,
                },
                {
                    path: "/dashboard/announcement",
                    element:<><AdminRoute><Announcement></Announcement></AdminRoute></>,
                },
                {
                    path: "/dashboard/reportedComments",
                    element:<><AdminRoute><ReportedComments></ReportedComments></AdminRoute></>,
                },
            ]
        },
      ]
    }
])
export default router;