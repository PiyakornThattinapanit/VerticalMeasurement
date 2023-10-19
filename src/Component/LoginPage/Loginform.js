import React ,{useState ,useRef} from 'react';
import "./loginform.css";
import axios from 'axios';

const Loginform = () => {
    const [popupStyle,showPopup] = useState("hide")

    const userformloginref = useRef();
    const pwdformloginref = useRef();

    const popup =() => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }

const postform = async (e) => {
    e.preventDefault();
    const userformlogin = userformloginref.current.value;
    const pwdformlogin = pwdformloginref.current.value;

    const dataLogin = {
        username: userformlogin,
        password: pwdformlogin
    };
    console.log(dataLogin)
    await axios
    .post('http://localhost:3001/auth/login', dataLogin, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err.response.data);
    });
};

return (
    <div className='page'>

        <div className='cover'>
            <h1>Welcome!!</h1>
            <input type="text" placeholder='username' ref={userformloginref}/>
            <input type="password" placeholder='password' ref={pwdformloginref}/>
            <div className='login-btn' onClick={(e)=>{postform(e);}}>
                Login
            </div>
            
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
);
};

export default Loginform