import React, {useState} from 'react'
import './addlistTester.css'


const AddlistTester = ({nList , onClose}) => {  
    const [isConfirm,setConfirm] = useState(false)

    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className="title">
                <p5 style={{color: "white"}}>ADD LIST</p5>
                    <div className="body">
                            Firstname:<input/>
                            Lastname:<input/>
                            <div className="footer">
                                <button className='btn-confirm'>CONFIRM</button> :
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