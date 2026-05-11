import "../css/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

export default function Register() {

    let {loading,error,signUp}=useSignUp();
    const navigate=useNavigate();

    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");

    const regUser=async(e)=>{
        e.preventDefault();
        let user=await signUp(email,password);

        if(user){
            navigate('/login');
        }
    }

    if(error){
        return <p className="error">{error}</p>
    }

  return (
    <form className="reg-form" onSubmit={regUser}>
        <div className="form-container">
            <h2>Register Form</h2>

            <div className="form-input">
                <label>UserName</label>
                <input type='text' placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} value={name}/>

                <label>Email</label>
                <input type='email' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <label>Password</label>
                <input type='password' placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

                <div className="action-container">
                    <Link to='/login'>Already have and Account?</Link>
                </div>

                <div className="form-btn">
                    <button type="submit" disabled={loading}>
                        {loading ? <span className="spinner"></span> : "Register"}
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}
