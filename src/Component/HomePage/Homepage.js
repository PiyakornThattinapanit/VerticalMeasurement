import './homepage.css';
import Header_home from './header_homepage/Header_home';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaForward , FaTrash , FaPlus , FaMinus , FaPlay} from 'react-icons/fa';
import { useState , handleChange ,useEffect} from 'react';
import Deletedata from './DeleteData/Deletedata';
import AddlistTester from '../addListTester/AddlistTester';
import ListTester from '../addListTester/listTester/ListTester';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';


const Homepage = () => {
  const [mode,setMode] = useState(true);
  const [isPopupOpen,setPopupOpen] = useState(false)
  const [isPopupOpen_Insert,setPopupOpen_Insert] = useState(false);
  const [cardUser,setcardUser] = useState([])
  const navigate = useNavigate();
  const [toArrayTester,setArrayTester] = useState([]);
  
  // let [isAdd,setAdd] = useState(0);
  
  const togglePopup=()=>{
    setPopupOpen(true)
    console.log(isPopupOpen);
  }
  const togglePopupInsert=()=>{
    setPopupOpen_Insert(!isPopupOpen_Insert);
    console.log(isPopupOpen_Insert);
  }
  // const amountAdd=()=>{
  //   setAdd(isAdd+1)
  //   if (isAdd !==  0) {
  //     console.log(isAdd);
  //     return 
  //   }else return <div></div>;
  // }
  async function GetDataTester() {
    const response_Tester = await axios.get('http://localhost:3001/addlist/getallusertester',{withCredentials:true});
    console.log('Response Tester:',response_Tester);
    const allListTester = response_Tester.data;
    console.log(allListTester);
    setArrayTester(allListTester);

    // const allTesterList = await response_Tester.json();
    // console.log(allTesterList);
    // setArrayTester(allTesterList);
  }
  useEffect(() => {
    GetDataTester();
  }, [])
  

  const addCardUser =() => {
    const newCardUser = <div className='carduser'>
                          <ListTester/>
                      </div>;
        setcardUser(prevCard => [...prevCard,newCardUser])
        console.log(mode)
  };
  // const addCardUser =() => {
  //   const newCardUser = <div className='carduser'>
  //                         <Card sx={{ maxWidth: 345 }}>
  //                           <Link to='./userinfo'>
  //                             <CardContent>
  //                               <Typography gutterBottom variant="h5" component="div">
  //                                 Firstname - Lastname
  //                               </Typography>
  //                             </CardContent>
  //                           </Link>
  //                         </Card>
  //                         <div>
  //                           {mode ? <a href='./test' className='btn-forward'>
  //                                     {/* <FaForward size="70px" color='#77bb41'/> */}
  //                                   </a>  : 
  //                                   <a className='btn-delete'>
  //                                     <FaMinus size="70px" color='#e32400' onClick={togglePopup}/>
  //                                     {isPopupOpen && <Deletedata onClose={togglePopup}/>}
  //                                   </a>
  //                           }   
  //                         </div>
  //                     </div>;
  //       setcardUser(prevCard => [...prevCard,newCardUser])
  //       console.log(mode)
  // };

  return (
    <div>
      {/* Test Component */}
      <div className='header'>
          <Header_home/>
      </div>
        <div className='body'>
          <div className='btn-container'>
              <button className='add-btn' onClick={togglePopupInsert}>
                <FaPlus size="20px" style={{color:'#00a3d7'}}/>
              </button>

              {isPopupOpen_Insert && <AddlistTester onCloseInsert={togglePopupInsert}/>}


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
           {/* ******************* Fix it ******************* */}
          <div className='show-list'> 
                {/* {isAdd > 0 ? <AddlistTester nList={isAdd}/> : <p1>No list</p1>} */}
            {toArrayTester.map(eachTester => 
              <ListTester modeProp={mode} 
              each={eachTester} {...eachTester}
              />
            )}
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
