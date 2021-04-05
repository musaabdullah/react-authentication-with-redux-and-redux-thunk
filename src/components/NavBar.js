import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function NavBar() {
      const [ user, setUser ] = useState();
      const handleUser = () => {
          setUser(JSON.parse(localStorage.getItem("user")));
          console.log(user);
        }
       
        const handleToken = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
      useEffect(() => {
          handleUser();
    },[])
 
 
    return (
        <div className="nav bg-dark d-flex justify-content-space-between">
           <a href="Home" className=" text-white nav-item nav-link">Home</a>
           {  user ? <div className="nav">
            <Link href="Register"  className="text-white nav-item nav-link">{user.email}</Link>
            <Link to="/login" className="text-white nav-item nav-link " onClick={() => handleToken()}>logout</Link>
           </div>
           :
           <div className="nav">
           <Link href="Register"  className="text-white nav-item nav-link">Register</Link>
           <Link href="login" className="text-white nav-item nav-link ">Login</Link>
           </div>
         
           }
        </div>
    )
}

export default NavBar
