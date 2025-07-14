import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

const MessageForm = () => {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[message,setMessage]=useState("");

  const handleMessage = async(e)=>{
    e.preventDefault();
    
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    console.log("Sending data:", {firstName, lastName, email, phone, message});
    
    try{
      await axios.post("http://localhost:4000/api/v1/message/send",{firstName,lastName,email,phone,message},{
        withCredentials:true,
        headers:{
           "Content-Type":"application/json"
        }
      }).then((res)=>{
        toast.success(res.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
    }
    catch(err){
      console.error("Error details:", err.response?.data || err.message);
      console.error("Status:", err.response?.status);
      toast.error(err.response?.data?.message || "Error sending message");
    }
  }
  return (

    <>
      <div className="container form-component message-form">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
      <ToastContainer />
    </>
 
  )
}

export default MessageForm;
