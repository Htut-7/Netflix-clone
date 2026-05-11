import { Link } from "react-router-dom";
import "../css/Login.css";
import { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-dom";

export default function Login() {

    let {loading,error,signIn}=useSignIn();
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

    const navigate=useNavigate();

   {error && <p className="error">{error}</p>}

    const loginUser=async(e)=>{
        e.preventDefault();
        let user=await signIn(email,password);

        if(user){
            navigate('/');
        }
    }

  return (
    <form className="login-form" onSubmit={loginUser}>
        <div className="login-container">
            <h2>Welcome Back</h2>
            <p>Welcome Back! Access trending movies and exclusive series.</p>

            <div className="login-input">
                <label>Email</label>
                <input type='email' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                <label>Password</label>
                <input type='password' placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

                <div className="login-action">
                    <Link to='/register'>Don't have an Account?</Link>
                </div>

                <div className="form-btn">
                    <button type='submit' disabled={loading}>
                        {loading ? <span className="spinner"></span> : "Login"}
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}
