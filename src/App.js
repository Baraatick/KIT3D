import React from "react";
// import HomePage from "./pages/homepage/homepage";
import Productspage from "./pages/productspage/productspage";
import {Route,Routes} from 'react-router-dom'
import Login from "./pages/login/login";
import Registration from "./pages/registration/registration";
import Profile from "./pages/Profile/profile";
import About from "./pages/about/about"
import {ToastContainer} from 'react-toastify'
import { Protector } from "./utils/Context";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Protector Component={Productspage}/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Profile" element={<Protector Component={Profile}/>}/>
        <Route path="/About" element={<Protector Component={About}/>}/>
        {/* <Route path="/Home" element={<Protector Component={HomePage}/>}/> */}
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
