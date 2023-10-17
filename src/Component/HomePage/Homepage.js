import './homepage.css';
import Header_home from './header_homepage/Header_home';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaForward , FaTrash , FaPlus , FaMinus , FaPlay} from 'react-icons/fa';
import { useState , handleChange } from 'react';
import Deletedata from './DeleteData/Deletedata';
import AddlistTester from '../addListTester/AddlistTester';
import ListTester from '../addListTester/listTester/ListTester';


const Homepage = () => {
  const [mode,setMode] = useState(true);
  const [isPopupOpen,setPopupOpen] = useState(false)
  const [cardUser,setcardUser] = useState([])
  let [isAdd,setAdd] = useState(0);
  const togglePopup=()=>{
    setPopupOpen(!isPopupOpen)
  }
  
  const amountAdd=()=>{
    setAdd(isAdd+1)
    if (isAdd !==  0) {
      console.log(isAdd);
      return <AddlistTester/>
    }else return <div></div>;
  }

  const addCardUser =() => {
    const newCardUser = <div className='carduser'>
                          <Card sx={{ maxWidth: 345 }}>
                            <a href='./userinfo'>
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  Firstname - Lastname
                                </Typography>
                              </CardContent>
                            </a>
                          </Card>
                          <div>
                            {mode ? <a href='./test' className='btn-forward'>
                                      {/* <FaForward size="70px" color='#77bb41'/> */}
                                    </a>  : 
                                    <a className='btn-delete'>
                                      <FaMinus size="70px" color='#e32400' onClick={togglePopup}/>
                                      {isPopupOpen && <Deletedata onClose={togglePopup}/>}
                                    </a>
                            }   
                          </div>
                      </div>;
        setcardUser(prevCard => [...prevCard,newCardUser])
        console.log(mode)
  };

  return (
    <div>
      <ListTester modeProp={mode}/>
      <div className='header'>
          <Header_home/>
      </div>
        <div className='body'>
          <div className='btn-container'>
              <button className='add-btn' onClick={amountAdd}>
                <FaPlus size="20px" style={{color:'#00a3d7'}}/>
              </button>


            <form className='searchbar' action="">
              Search: 
              <input className="input" type="text"
                placeholder='name'
                value=""
                // onChange={(e) => handleChange(e.target.value)}
                />
              {/* <select></select> */}

            </form>
              {mode ? <button onClick={()=>{setMode(!mode);}}  className='mode-btn'>
                        <FaTrash size="20px"style={{color:"#ff6251"}}/>
                      </button> : 
                      <button onClick={()=>setMode(!mode)} className='mode-btn'>
                        <FaPlay size="20px" fade style={{color: "#008cb4"}}/>
                      </button>
              }
          </div>
          <div className='show-list'>
                {isAdd > 0 ? <AddlistTester nList={isAdd}/> : <p1>No list</p1>}
          </div>
            {/* add another card user */}
          <div className='card-container'>
            {cardUser.map((carduser,index) => (
              <div key={index}>{carduser}</div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default Homepage
