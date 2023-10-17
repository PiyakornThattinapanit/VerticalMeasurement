import React from 'react';
import './startpage.css';

const Startpage = () => {
  return (
    <div className='StartPage'>
        <div className='banner'> 
            <p class="h1display">Hello World</p>
            <p class="lead">Welcome to my website</p>
        </div>

        <div className='all'>
          {/* <div1> */}
            <div className='left'>
              <a href='./Login'>
                   Login
              </a>
            </div>
          {/* </div1> */}

          <div1>
            <div className='center'>
              <div className='explainer'> Get Start </div>
              <div className='text'> Choose your choice! </div>
            </div>
          </div1>

          {/* <div1> */}
            <div className='right'>
              <a href='./Register'>
                <div className='text'> Sign up </div>
              </a>
            </div>
          {/* </div1> */}

        </div>
    </div>
  )
}

export default Startpage