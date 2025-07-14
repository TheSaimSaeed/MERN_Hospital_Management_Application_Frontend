import react from "react";
import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = ()=>{
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login  />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;