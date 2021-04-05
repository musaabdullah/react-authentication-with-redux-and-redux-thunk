import React from "react";
import * as AI from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/user';
import '../App.css';
function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({email: "", passworld: ""})
    const dispatch = useDispatch();
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(createPost(user));
    }

  return (
    <div className="container">
      <div className="row  d-flex aling-items-center justify-content-center m-5">
        <div className="col-md-4 ">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4 style={{fontWeight: "bold"}}>Registeration Form</h4>
            </div>
            <form className="p-2">
              <div className="input-group pb-3 pt-4">
                <span className="input-group-text">
                  <AI.AiOutlineMail />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={user.email}
                  onChange={(e) => setUser({...user, email:e.target.value})}
                />
              </div>
              <div className="input-group pb-4 ">
                <span className="input-group-text">
                  <AI.AiFillLock /> 
                </span>
                
                <input
                  type={`${showPassword ? "text":"password"}`}
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({...user, password:e.target.value})}
                  style={{borderRightColor: "transparent"}}
                />
                <span style={{cursor:"pointer", border: "1px solid black", borderRadius:4, borderLeftColor:"transparent"}} onClick={() => handleShowPassword()} className="p-2" >{showPassword ? <AI.AiOutlineEyeInvisible/> : <AI.AiOutlineEye/>}</span>   
              </div>
             
              <div className="container text-center">
                <button onClick={handleRegister} className="btn btn-primary">Register</button>
                <button className="btn btn-danger" style={{marginLeft:5}} >Cancel</button>
              </div>
              <p className="mt-3" style={{fontSize: 13, fontWeight: "bold"}}>if you don't have account click <Link>here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
