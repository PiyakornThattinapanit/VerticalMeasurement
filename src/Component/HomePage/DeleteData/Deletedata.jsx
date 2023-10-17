import React from 'react'
import './deletedata.css'

const Deletedata = ({onClose}) => {
  return (
    <div className='popup'>
        <div className="popup-content">
            <p>Delete a data?</p>
            <button >Accept</button>
        </div>
            <button onClick={onClose}>Decline</button>
    </div>
  )
}

export default Deletedata