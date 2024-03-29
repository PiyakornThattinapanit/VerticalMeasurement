import {React,useEffect,useState} from 'react'
import Header_home from '../header_homepage/Header_home'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import axios from 'axios'; 
import { useLocation,useNavigate } from 'react-router-dom';
import './userinfo.css'

const Userinfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const testerId = location.state && location.state.Id;
    const macUser = location.state && location.state.serialnum;
    console.log(testerId);
    console.log(macUser);

    async function postmacUserAndSendID() {
        navigate('/home/test');
        const setDataForESP = {
            macaddress: macUser, // mac address user
            tester_id: testerId //ID Tester
        }
        // console.log(setDataForESP);
        await axios.post('http://localhost:3001/testerinfo/authensensor',setDataForESP,{
            headers: {
                'Content-Type' : 'application/json',
            },
            withCredentials:true
        })
        .then((response) => {
            console.log(response);    
        })
        .catch((err) => {
            console.log(err);
        })
    };

return (
    <div>
        <div className='header-info'>
            <Header_home/>
        </div>
        <div className='btn-command'>
        {/* <Stack direction="row" spacing={2}> */}
        <LoadingButton
            loading
            loadingPosition="end"
            // variant="outlined"
        >
            <button onClick={postmacUserAndSendID} className='btn-test'>
                TEST
            </button>
        </LoadingButton>
        {/* </Stack> */}
        </div>
        <div className='carduser'>
            <Card sx={{ maxWidth: 345 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        VerticalAVG - FloatTimeAVG
                    </Typography>
                </CardContent>
            </Card>
        </div> 
    </div>
)
}

export default Userinfo