import {React} from 'react';
import {BrowserRouter,Routes,Route,useParams} from 'react-router-dom'
import Loginform from './Component/LoginPage/Loginform';
import Startpage from './Component/StartPage/Startpage';
import Registerpage from './Component/RegisterPage/Registerpage';
import Homepage from './Component/HomePage/Homepage';
import Dropdown from './Component/Dropdown/Dropdown';
import Chartpage from './Component/ChartPage/Chartpage';
import Testpage from './Component/TestPage/Testpage';
import Testingpage from './Component/TestPage/TestingPage/Testingpage';
import Userinfo from './Component/HomePage/UserInfo/Userinfo';


function App() {
  //useEffect
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Loginform/>}/>
        <Route path="/login" element={<Loginform/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/home/dropdown" element={<Dropdown/>}></Route>
        <Route path="/home/userinfo" element={<Userinfo/>}></Route>
        <Route path="/home/test" element={<Testpage/>}></Route>
        <Route path="/home/test/testing" element={<Testingpage/>}></Route>
        {/* <Route path="/home/graph" element={<Chartpage/>}></Route> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
