import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css';
import { Sidebar } from './Components/sideBar/sideBar';
import Home from './Components/Home/Home';
import Vista1 from './Components/Vista1/Vista1';
import Vista2 from './Components/Vista2/Vista2';
import ConfiguracionPerfil from './Components/ConfiguracionPerfil/ConfiguracionPerfil';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
// import { setAllCountries } from "./Redux/actions.js";
import { useQuery, gql } from '@apollo/client';


function App() {

  // useEffect(() => {
  //   if(data?.countries){
  //   dispatch(setAllCountries(data?.countries));
  //   }
  // }, []);


  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vista1" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
        <Route path="/configuracion" element={<ConfiguracionPerfil />} />
      </Routes>
    </div>
  )
}

export default App
