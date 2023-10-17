import React from 'react'
import Header_home from '../HomePage/header_homepage/Header_home'
import { FaBackward } from 'react-icons/fa'
import './testpage.css'

const Testpage = () => {
  return (
    <div>
        <div className='header-test'>
            <Header_home/>
        </div>
        <a href='./userinfo' className='btn-back'>
            <FaBackward size="40px" style={{color: "#77bb41"}}/>
        </a>
        
        <a className='btn-start'>
           Start Testing
        </a>

    </div>
  )
}

export default Testpage