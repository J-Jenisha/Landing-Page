import React from 'react';
import user_icon from '../images/person.png'
import email_icon from '../images/Email.png'
import password_icon from '../images/password.png'
import { RiLoginCircleFill } from "react-icons/ri";

const Signup = () =>{

    return(
        <div className='container'>
            <div className="header">
                <div className = "text"> SignUp </div>
                <div className = "underline"></div>
            </div>
            <div className = "inputs">
                <div className="input">
                <img src={user_icon} alt="user" height="30" width="30"/>
                    <input type = "text" placeholder="Name"/>
                </div>
                
                <div className="input"> 
                <img src={email_icon} alt="mail" height="30" width="30"/>
                    <input type = "email" placeholder="Email Id"/>
                </div>
            
            
                <div className="input">
                <img src={password_icon} alt="pass" height="30" width="30"/>
                    <input type = "password" placeholder="Password"/>
                </div>
            
            </div>
            
            <div className = "submit-container">
                <div className = "submit"><RiLoginCircleFill/>Sign Up</div>
                
            </div>
        </div>
    );
};

export default Signup;