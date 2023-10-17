import React ,{useState} from 'react';
import "./loginform.css";

const Loginform = () => {
    const [popupStyle,showPopup] = useState("hide")

    const popup =() => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
return (
    <div className='page'>

        <div className='cover'>
            <h1>Welcome!!</h1>
            <input type="text" placeholder='username'></input>
            <input type="password" placeholder='password'></input>
            <div className='login-btn' onClick={popup}>Login</div>
            
            <div className='register-btn'>
                <a href='/Register'>
                    Register
                </a>
            </div>

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>

    </div>
)
}

export default Loginform