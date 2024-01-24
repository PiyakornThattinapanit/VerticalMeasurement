import React,{useState,useEffect} from 'react';
import './header_home.css';
import axios from 'axios';
import {FaCaretDown} from 'react-icons/fa';
import Logo_VPM from '../../../Logo_VPM.png';
import { Navigate, useNavigate } from 'react-router-dom';

const Header_home = () => {
  const [isState,setState] = useState([]);
  const [dropDown,setDropDown] = useState('');
  const [trainerData,setTrainerData] = useState([]);
  const navigate = useNavigate();
  const options = [
    {value: '', label: 'Logout'}
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(['']);
        const userData = await axios.get('http://localhost:3001/auth/getuser',{withCredentials:true});
        setTrainerData(userData.data);
        // if (userData.status !== 200){
        //   navigate("./login")
        // }
        
        // console.log(userData.data)
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3001/auth/logout',{withCredentials:true});
    } catch (error){
      console.error('Error logging out:' ,error);
    }
  }

  const handleOptionChange = (event) => {
    setDropDown(event.target.value);
  };

  return (
    <div>
      <ul className='box-header'>
        <li className='nav-logo'>
          <a href='/home'>
            <img src='https://cdn.discordapp.com/attachments/1155872886804987904/1172616737225711647/Logo_VPM.png?ex=6560f770&is=654e8270&hm=0303ca4cc09c61ecad3c5040ae811522de0c7dbda3a240ab80c2bc78196ebd86&' 
            alt="Logo" style={{width:'80px',height:'60px'}}/>
          </a>
        </li>
        <li className='show-state text-[#56cc73]'>
          <b className='topic-page'>{isState}</b>
        </li>
        <li className='dropdown-user'>
          <p> {`${trainerData.fname}` + '-' +`${trainerData.lname}`}  
            <select value={dropDown} onChange={handleOptionChange} className="btn-dropdown">
              <option value="">
                <FaCaretDown/>
              </option>
              {options.map((option) => (
                <option key={option.value}>
                    {option.label}
              </option>
              ))}
            </select>
                  <button onClick={()=>{handleLogout();}}> click </button>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Header_home