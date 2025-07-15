import react, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { Context } from "./main";
import axios from "axios";
import Appointment from "./Pages/Appointment";

const App = ()=>{
  const {isAuthenticated,setAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        await axios.get("",{withCredentials:true}).then((res)=>{
          setAuthenticated(true);
          setUser(res.data.user);
        })
      } catch (error) {
        setAuthenticated(false);
        setUser({});
      }
    }}
    ,[isAuthenticated]
  )
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default App;