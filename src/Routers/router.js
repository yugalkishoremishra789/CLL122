import React from 'react'
import{Routes ,Route,Navigate} from "react-router-dom"
import Home from '../components/Home/home.js'
import Cstr from '../components/CalculationLander/calcstr.js'
import Pfr from '../components/CalculationLander/calpfr.js'
import PackedBed from '../components/CalculationLander/calpbr.js';
import BatchReactor from '../components/CalculationLander/calbatch.js'
import AboutPro from '../components/About/About.js'
import Team from '../components/Team/team.js'



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cstr" element={<Cstr/>}/>
      <Route path="/plugf" element={<Pfr/>}/>
      <Route path="/pbr" element={<PackedBed/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/batch" element={<BatchReactor/>}/>
      <Route path="/about" element={<AboutPro/>}/>
    </Routes>
  )
}

export default Router