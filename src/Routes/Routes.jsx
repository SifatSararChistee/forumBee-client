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

const isAdmin =true;

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
                    element:isAdmin ? <AdminProfile /> : <MyProfile />,
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
                    element:<AdminProfile></AdminProfile>,
                },
                {
                    path: "/dashboard/manageUsers",
                    element:<ManageUser></ManageUser>,
                },
                {
                    path: "/dashboard/announcement",
                    element:<Announcement></Announcement>,
                },
                {
                    path: "/dashboard/reportedComments",
                    element:<ReportedComments></ReportedComments>,
                },
            ]
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
      ]
    }
])
export default router;