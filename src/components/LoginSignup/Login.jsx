import React, { useState } from 'react'
import './Login.css'

import user_icon from '../assets/user.png'
import email_icon from '../assets/email.png'
import pwd_icon from '../assets/pwd.png'



const Login = () => {

    const [action, setAction] = useState('Sign Up')

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {
                action === "Login"?
                <div></div>
                :
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>    
            }

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='example@gmail.com'/>
            </div>
            
            <div className="input">
                <img src={pwd_icon} alt="" />
                <input type="password" placeholder='********'/>
            </div>
        </div>
        {
            action === "Login"?
            <div className="forget">Forgot password?<span> click here</span></div>
            :
            <div></div>

        }
        
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login
