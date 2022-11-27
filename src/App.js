import './App.css';
import Fetch, { Fetch2 } from './Data-fetch/Fetch';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from './Header/NavBar';
import About from './Header/Pages/About';
import Particular from './Particular/Particular';



function App() {
  
  return <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
          <Route path="/" element={<Fetch/>}></Route>
          <Route path="/viewpost/" element={<Fetch2/>}/>
          <Route path="/viewpost/:postid" element={<Particular/>}/>
          <Route path="about" element={<About/>} ></Route>
        
      </Routes>
  
    </BrowserRouter></div>

}

export default App;


