import React from 'react'
import './listTester.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaForward , FaMinus } from 'react-icons/fa';
import { useState } from 'react';
import Deletedata from '../../HomePage/DeleteData/Deletedata';
import {Link} from 'react-router-dom';



const ListTester = ( {modeProp,each} ) => {
    const [mode,setMode] = useState(true);
    const [isPopupOpen,setPopupOpen] = useState(false)
    const togglePopup=()=>{
        setPopupOpen(!isPopupOpen)
    }
    const tester_id = each._id;
    console.log(each);
    console.log(tester_id);
    // ****************** Delete ********************
    // const handleDelete = () => {
    //     const 
    // }

    return (
    <div>
        <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <Link to='./userinfo'>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {each.fname_tester} - {each.lname_tester}
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
            <div>
                {modeProp ? null  : 
                            <a className='btn-delete'>
                                <FaMinus size="70px" color='#e32400' onClick={togglePopup}/> 
                                {isPopupOpen && <Deletedata onClose={togglePopup} clickToDelete={each} ID_Tester={tester_id}/>}
                            </a>
                }
            </div>
        </div> 
            {/* add another card user */}
    </div>
    )
}

export default ListTester