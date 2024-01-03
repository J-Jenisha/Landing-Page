import React from 'react';

import email_icon from '../images/Email.png'
import password_icon from '../images/password.png'
const Login = () =>{
    return(
        
        <div className='container'>
            <div className="header">
                <div className = "text"> Login </div>
                <div className = "underline"></div>
            </div>
            <div className = "inputs">
                <div className="input">
                <img src={email_icon} alt="mail" height="30" width="30"/>
                    <input type = "email" placeholder="Email Id"/>
                </div>
            
                <div className="input">
                <img src={password_icon} alt="pass" height="30" width="30"/>
                    <input type = "password" placeholder="Password"/>
                </div>
            
            </div>
            <div className = "forgot-password"><span>Forgot Password? </span></div>
            
            <div className = "submit-container">
                
                <div className = "submit">Login</div>
            </div>
        </div>
    
    );
};

export default Login;