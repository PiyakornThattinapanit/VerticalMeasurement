import {React,useState} from 'react'
import Header_home from '../header_homepage/Header_home'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaArrowUp , FaArrowDown } from 'react-icons/fa';
import './userinfo.css'

const Userinfo = () => {
    const [isSort,setSort] = useState(true)

    // console.log(isSort)
return (
    <div>
        <div className='header-info'>
            <Header_home/>
        </div>
        <div className='btn-command'>
            <button onClick={()=>setSort(!isSort)} className="btn-sort">
                SORT{isSort ? <FaArrowDown/> : <FaArrowUp/>}
            </button>
            <Button href="./test" className='btn-test'>
                TEST
            </Button>
        </div>
        <div className='carduser'>
            <a href='./graph'>
            <Card sx={{ maxWidth: 345 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        VerticalAVG - FloatTimeAVG
                    </Typography>
                </CardContent>
            </Card>
            </a>
        </div>    
    </div>
)
}

export default Userinfo