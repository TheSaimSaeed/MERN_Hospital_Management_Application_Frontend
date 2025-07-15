import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Context } from '../main';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  const {isAuthenticated,setAuthenticated} = useContext(Context);

  const navigatTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/v1/user/login", { email, password, Confirmpassword, role: "Patient" }, { withCredentials: true, headers: { "Content-Type": "application/json" } }).then((res)=>{
        toast.success(res.data.message);
        setAuthenticated(true);
        navigatTo("/");
        setEmail("");
        setPassword("");
        setConfirmpassword("");

      })

    } catch (err) {
      toast.error(err.response.data.message);

    }

    if(isAuthenticated){
      return <Navigate to={"/"}/>
    }

  }
  return (
    <>
      <div className="Container form-component login-form">
        <h2>Login Page</h2>
        <p>Please Login to Continue</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse, numquam provident impedit velit nesciunt!</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder='Confirm Password' value={Confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
          <Link to={"/register"}
            style={{ textDecoration: "none", color: "#271776ca" }}>Register Now</Link>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  )
}

export default Login
