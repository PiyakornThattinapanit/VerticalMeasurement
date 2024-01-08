import React, { useEffect } from 'react'
import Header_home from '../HomePage/header_homepage/Header_home'
import { FaBackward } from 'react-icons/fa'
import './testpage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Testpage = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   //change header
  // },[])
  function handleSensor () {
    async function handleSendReqToSensor() {
      const response_data_sensor = await axios.get('http://localhost:3001/testerinfo/getdatafromsensor',{withCredentials:true});
      console.log('Response Data From Sensor:',response_data_sensor);
      // const data1 = response_data_sensor
    }
    
    handleSendReqToSensor();
  }

  return (
    <div>
        <div className='header-test'>
            <Header_home />
        </div>
        <a href='./userinfo' className='btn-back'>
            <FaBackward size="40px" style={{color: "#77bb41"}}/>
        </a>
        
        <a className='btn-start' href='/home/test/testing' onClick={handleSensor}>
          Start Test
        </a>
        <button onClick={handleSensor}> test function</button>

    </div>
  )
}

export default Testpage