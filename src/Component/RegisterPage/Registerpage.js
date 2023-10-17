import React, { useState, useRef, useEffect } from 'react';
import './registerpage.css';
import axios from 'axios'; // Import axios properly
import { Snackbar } from '@mui/material/Snackbar';
import PopupError from './PopupError/PopupError';
import { Button } from '@mui/material/Button';

const Registerpage = () => {
const [data, setData] = useState([]);
const [buttonPopUp,setbuttonPopup] = useState(false);
const [isError,setIsError] = useState(false);

const firstnameref = useRef();
const lastnameref = useRef();
const usernameref = useRef();
const passwordref = useRef();
const confirmpasswordref = useRef();

useEffect(() => {
    axios.get('http://localhost:3000/Register', {crossdomain: true})
    .then((res) => {
        console.log("Getting from ::::", res.data);
        setData(res.data);
    })
    .catch((err) => console.log(err));
}, []);

const postData = (e) => {
    e.preventDefault();

    const firstnameinput = firstnameref.current.value;
    const lastnameinput = lastnameref.current.value;
    const usernameinput = usernameref.current.value;
    const passwordinput = passwordref.current.value;
    const confirmpasswordinput = confirmpasswordref.current.value;

    const dataRegister = {
    fname: firstnameinput,
    lname: lastnameinput,
    username: usernameinput,
    password: passwordinput,
    cfpassword: confirmpasswordinput
    };
    console.log(dataRegister)
    axios
    .post('http://localhost:3001/auth/register', dataRegister, {
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
};

const checkPwd = () => {
    setIsError(true);
    // console.log(firstnameref.current.value)
    // console.log(lastnameref.current.value)
    // console.log(usernameref.current.value)
    // console.log(passwordref.current.value)
    // console.log(confirmpasswordref.current.value)

    if (passwordref.current.value === "" || confirmpasswordref.current.value === "" || usernameref.current.value === "" || firstnameref.current.value === "" || lastnameref.current.value === ""){
        console.log("Fill an empty")
        setIsError(true);
    }
    else if (passwordref.current.value !== confirmpasswordref.current.value) {
        console.log("Password is not match!")
        setIsError(true);
    }
    else {
        postData();
    }
}

return (
    <div>
        <div className='banner-register'>
            <div className='Topic text-white'>REGISTER</div>
            <div className='box-data'>
                <div className='input-firstname'>
                    First name : <input placeholder='Firstname' type='text' ref={firstnameref}/>
                </div>
                <div className='input-lastname'>
                    Last name : <input placeholder='Lastname' ref={lastnameref} type='text' />
                </div>
                <div className='input-username'>
                    Username : <input placeholder='Username' ref={usernameref} type='text' />
                </div>
                <div className='input-password'>
                    Password : <input placeholder='Password' ref={passwordref} type='password' />
                </div>
                <div className='input-confirm-password'>
                    Confirm password : <input placeholder='Confirm password' ref={confirmpasswordref} type='password' />
                </div>
                <button className='signup-btn text-4xl' onClick={()=>{setbuttonPopup(true); checkPwd();}} >
                    Sign up
                </button>
                {isError && 
                    <PopupError trigger={buttonPopUp} setTrigger={setbuttonPopup}>
                        asas
                    </PopupError>
                }

                    {/* <Snackbar
                                open= {true}
                                autoHideDuration={6000}
                                onClose={()=>{setIsError(false)}}
                                message="Note archived"
                    /> */}

            </div>
        </div>
    </div>
);
};

export default Registerpage;
