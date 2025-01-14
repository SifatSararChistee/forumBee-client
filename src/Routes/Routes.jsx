import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Membership from "../Pages/Membership/Membership";


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
      ]
    }
])
export default router;