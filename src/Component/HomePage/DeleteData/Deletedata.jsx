import React from 'react'
import './deletedata.css'
import axios from 'axios'

const Deletedata = ({onClose,clickToDelete,ID_Tester}) => {
  const tester_id = ID_Tester;
  console.log('DeletePage:',tester_id);

  async function deleteThisTester() {
    const del_res = await axios.delete('http://localhost:3001/addlist/deleteusertester/'+tester_id,{withCredentials:true});
    console.log('Delete Response:',del_res);
    if (del_res) {
      window.location.reload(false);
    }
  }

  return (
    <div className='popup'>
        <div className="popup-content">
            <p>Delete a data?</p>
            <button onClick={deleteThisTester}>Accept</button>
        </div>
            <button onClick={onClose}>Decline</button>
    </div>
  )
}

export default Deletedata