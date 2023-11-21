import React, {useState,useRef,useEffect} from 'react';
import './addlistTester.css';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddlistTester = ({nList , onClose}) => {  
    const [isConfirm,setConfirm] = useState(false)
    const fname_TesterRef = useRef();
    const lname_TesterRef = useRef();
    const navigate = useNavigate();

    const postUserTester = async (e) => {
        e.preventDefault();
        const fname_TesterForm = fname_TesterRef.current.value;
        const lname_TesterForm = lname_TesterRef.current.value;
        const figureTester = {
            fname_tester : fname_TesterForm,
            lname_tester : lname_TesterForm
        };
        console.log(figureTester);
        await axios.post('http://localhost:3001/addlist/addusertester',figureTester,{
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        }).then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
    };

    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className="title">
                <p5 style={{color: "white"}}>ADD LIST</p5>
                    <div className="body">
                            Firstname:<input type="text" ref={fname_TesterRef}/>
                            Lastname:<input type="text" ref={lname_TesterRef}/>
                            <div className="footer">
                                <button className='btn-confirm' onClick={(e)=>{postUserTester(e);}}>CONFIRM</button> :
                                <button className='btn-cancle' onClick={()=>setConfirm(true)}>CANCEL</button>            
                            </div>
                    </div>
            </div>
        </div>
        {/* {children} */}
    </div>
)
}

export default AddlistTester