import React, { useState, useRef, useEffect } from 'react';
import './registerpage.css';
import axios from 'axios'; // Import axios property
import PopupError from './PopupError/PopupError';
// import { Snackbar } from '@mui/material/Snackbar';

const Registerpage = () => {
const [data, setData] = useState([]);
const [buttonPopUp,setbuttonPopup] = useState(false);
const [isEmpty,setIsEmpty] = useState(false);
const [isMatch,setIsMatch] = useState(false);
const [isSuccess,setIsSuccess] = useState(false);

const firstnameref = useRef();
const lastnameref = useRef();
const usernameref = useRef();
const passwordref = useRef();
const confirmpasswordref = useRef();
const macaddressref = useRef();

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
    const macaddressinput = macaddressref.current.value; 

    const dataRegister = {
        fname: firstnameinput,
        lname: lastnameinput,
        username: usernameinput,
        password: passwordinput,
        cfpassword: confirmpasswordinput,
        macaddress: macaddressinput
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

const checkPwd = (e) => {
    if (passwordref.current.value === "" || confirmpasswordref.current.value === "" || usernameref.current.value === "" || firstnameref.current.value === "" || lastnameref.current.value === ""){
        console.log("Fill an empty")
        setIsEmpty(true);
    }
    else if (passwordref.current.value !== confirmpasswordref.current.value) {
        console.log("Password is not match!")
        setIsMatch(true);
    }
    else {
        postData(e);
        setIsSuccess(true);
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
                <div className='input-macaddress'>
                    Mac Address : <input placeholder='mac address' ref={macaddressref} type='password' />
                </div>
                <button className='signup-btn text-4xl' onClick={(e)=>{setbuttonPopup(true); checkPwd(e);}} >
                    Sign up
                </button>
                <a href='./login' className='gotoLogin-btn'> Go to Login page</a>

                {isEmpty && 
                    <PopupError trigger={buttonPopUp} setTrigger={setbuttonPopup}>
                        Fill the blank!
                    </PopupError>
                }
                {isMatch && 
                    <PopupError trigger={buttonPopUp} setTrigger={setbuttonPopup}>
                        Password is not match! 
                    </PopupError>
                }
                {isSuccess && 
                    <PopupError trigger={buttonPopUp} setTrigger={setbuttonPopup}>
                        Sign up successfully!
                    </PopupError>
                }


                    {/* <Snackbar open= {true} autoHideDuration={6000} nClose={()=>{setIsError(false)}} message="Note archived" /> */}
            </div>
        </div>
    </div>
);
};

export default Registerpage;
