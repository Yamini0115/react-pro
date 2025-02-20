import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import aboutimg1 from './images.jpeg';

const Loginform =()=>{
  const[input,setinput]=useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate=useNavigate();

  const routechange=()=>{
    let path='./register';
    navigate(path);
  }
  const handleSubmit = () => {
  const isvalid=true;
     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setError("Please Enter a Valid email address.");
        isvalid=false;
    } 
    if(password.length<6 || password.length>16){
        setError("Password should be between 6 to 12 characters.");
        isvalid=false;
    }
    if(isvalid){
        alert("LOGIN SUCCESFULLY!!");
        routechange();   
    }
  };
 return (
    <div id="backimg">
      <div className="error">{error}</div>
      <img src={aboutimg1} className="img5" alt="logo"></img>
      <center>
      <form id="form" >
      <h2 id="hh2"></h2>
      <h2 style={{marginLeft:"70px",fontSize:"40px",marginTop:"-50px",color:"white"}}>Login</h2>
      <div>
          <input type="text" 
            placeholder="Enter your username"
             value={input} 
             onChange={(e)=>setinput(e.target.value)} 
             />
      </div>
      <div>  
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
      </div>
      <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
      </div>
        <button type="submit" id="logbtn" onClick={handleSubmit}>Login</button>
      </form>
      </center>
    </div>
  );
    }
export default Loginform;



