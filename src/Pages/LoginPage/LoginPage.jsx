import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const LoginPage = () => {
    const axiosPublic =useAxiosPublic()
    const {logInUser,  setUser, logInWithGoogle, setLoading} =useContext(AuthContext)
    const [email, setEmail] = useState("");
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogIn=(e)=>{
      e.preventDefault()
      const form =e.target;
      const email =form.email.value;
      const password =form.password.value;
      logInUser(email ,password)
      .then((userCredential) => {
        const user = userCredential.user;
          setUser(user)
          // setLoading(false)
          toast.success("Login Successful")
          navigate(location?.state ? location.state: "/")
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message)
      });
    }
    const handleGoogleLogin=()=>{
      logInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
          setUser(user)
          // setLoading(false)
          const userInfo = {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            admin:false,
            badge: 'Bronze'
        }           
        axiosPublic.post('/users', userInfo)
        .then(res =>{
          if (res.data.insertedId) {
            // console.log('user added to the database')
          }
          toast.success("Login Successful")
          navigate(location?.state ? location.state: "/")
        })
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message)
      });
    }

    return (
<div>
        <div className="flex flex-col justify-center items-center mt-4 w-[400px] mx-auto shadow-2xl rounded-xl">
        <h1 className="text-3xl font-bold mt-3">Log in to Your Account</h1>
        <form className="p-10 w-full" onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  
          onChange={(e) => setEmail(e.target.value)}
          name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <button className="label-text-alt link link-hover text-sm">Forgot password?</button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success text-white text-lg">Login</button>
        </div>
        <p className="text-center">Or</p>
        <div className="form-control">
          <button className="btn text-lg" onClick={handleGoogleLogin}> <FcGoogle />Login With Google</button>
        </div>
      </form>
      <p>Don't have account?</p>
      <p className="mb-5 text-lg font-medium underline"><Link to={'/register'}> Register Here </Link></p>
        </div>
      </div>
    );
};

export default LoginPage;