import React ,{useState ,useRef,useEffect} from 'react';
import "./loginform.css";
import {Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';


const Loginform = () => {
    const [popupStyle,showPopup] = useState("hide")
    const [isAuth,setAuth] = useState(0);
    const userformloginref = useRef();
    const pwdformloginref = useRef();
    const navigate = useNavigate();
    const popup =() => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
    function checkMiddleware(varAuth) {
        if (varAuth.status === 200 && isAuth === 0) {
            navigate("/home")
        }
        else if(varAuth.status === 200 && isAuth!==0) {
            navigate("/home")
            console.log("Success Authentication") // ทำไงให้ไม่สามารถกดกลับได้??
            setAuth(0)
        }
        else {
            console.log("Error Authentication")
            console.log(varAuth)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userAuthorize = await axios.get('http://localhost:3001/auth/getuser',{withCredentials:true});
                checkMiddleware(userAuthorize);
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [isAuth]);


const postform = async (e) => {
    e.preventDefault();
    setAuth(isAuth+1);
    const userformlogin = userformloginref.current.value;
    const pwdformlogin = pwdformloginref.current.value;
    const dataLogin = {
        username: userformlogin,
        password: pwdformlogin
    };
    console.log(dataLogin)
    await axios.post('http://localhost:3001/auth/login', dataLogin, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true //credentials
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
{/* 
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div> */}

        </div>

    </div>
);
};

export default Loginform