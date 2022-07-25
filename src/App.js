import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Details from '../src/pages/details/Details'
import Login from '../src/pages/login/Login'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>

    </BrowserRouter>
  )
 
};

export default App;
