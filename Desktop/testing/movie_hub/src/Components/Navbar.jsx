import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";
import useSignOut from "../hooks/useSignOut";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import { AiFillProfile } from "react-icons/ai";

export default function Navbar() {

    const [open,setOpen]=useState(false);

    const navigate=useNavigate();
    let {logOut}=useSignOut();

    const userLog=async()=>{
        logOut();

        navigate('/login')
    }

    const {user}=useContext(AuthContext);

  return (
    <div className="nav-bar">
        <h2 className="nav-logo">MovieHub</h2>

        <div className="nav-link">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movie'>Movie</NavLink>
            <NavLink to='/show'>TV Shows</NavLink>
        </div>

        <div className="nav-buttons">

    {!user && (
        <>
            <Link className="login-btn" to='/login'>
                Login
            </Link>

            <Link className="nav-start-btn" to='/register'>
                Get Started
            </Link>
        </>
    )}

    {!!user && (

        <div className="profile-menu">

            <button
                className="profile-btn"
                onClick={() => setOpen(!open)}
            >
                <AiFillProfile/>
            </button>

            {open && (

                <div className="dropdown-menu">

                    <Link to='/wishlist'>
                        Wishlist
                    </Link>

                    <button onClick={userLog}>
                        <FiLogOut className="log-icon"/>
                    </button>

                </div>

            )}

        </div>

    )}

</div>
    </div>
  )
}
