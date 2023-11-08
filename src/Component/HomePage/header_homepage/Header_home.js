import React,{useState,useEffect} from 'react';
import './header_home.css';
import axios from 'axios';
import {FaCaretDown} from 'react-icons/fa';

const Header_home = () => {
  const [dropDown,setDropDown] = useState('');
  const [trainerData,setTrainerData] = useState([]);
  const options = [
    {value: '', label: 'Logout'}
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get('http://localhost:3001/auth/getuser',{withCredentials:true});
        setTrainerData(userData.data);
        // console.log(userData.data)
      } catch(error) {
          console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  

  const handleOptionChange = (event) => {
    setDropDown(event.target.value);
  };

  return (
    <div>
      <ul className='box-header'>
        <li className='nav-logo'>
          <a href='./'>
            <p>Logo</p>
          </a>
        </li>
        <li className='show-state text-[#56cc73]'>
          <b className='topic-page'>Home</b>
        </li>
        <li className='dropdown-user'>
          <p> {`${trainerData.fname}` + '-' +`${trainerData.lname}`}  
            <select value={dropDown} onChange={handleOptionChange} className="btn-dropdown">
              <option value="">
                <FaCaretDown/>
              </option>
              {options.map((option) => (
                <option key={option.value}>
                  <a>
                    {option.label}
                  </a>
              </option>
              ))}
            </select>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Header_home