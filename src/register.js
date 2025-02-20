import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import aboutimg1 from './images.jpeg';



const RegisterForm = () => {
     let navigate=useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    routechange();
  };
  const routechange=()=>{
    let path='/dashboard';
    navigate(path);
  }
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg" style={{backgroundColor:"black",height:"900px"}}>
        <img src={aboutimg1} className="img6" alt="logo"></img>
        <div >
      <h2 className="text-2xl font-bold mb-4" style={{color:"white",marginTop:"-500px",fontSize:"30px",marginLeft:"1050px"}}>Register Now</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-4" >
          
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="first name"
            style={{border:"2px solid white",marginLeft:"1000px",width:"250px"}}
            
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        

        
        
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
                
              },
            })}
            className="w-full p-2 border rounded-md"
            style={{border:"2px solid white",marginLeft:"1000px",width:"250px"}}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    

        
        
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            className="w-full p-2 border rounded-md"
            style={{border:"2px solid white",marginLeft:"1000px",width:"250px"}}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        

    
        
          <input
            type="password"
            placeholder="comform password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === watch("password") || "Passwords do not match",
            })}
            className="w-full p-2 border rounded-md"
            style={{border:"2px solid white",marginLeft:"1000px",width:"250px"}}
          />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>

    
        <button type="submit" id="logbtn" onClick={handleSubmit} style={{border:"2px solid white",marginLeft:"1050px",width:"200px",backgroundColor:"purple"}}>Login</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterForm;
