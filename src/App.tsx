import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.component'
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailOpenLine,
} from "react-icons/ri";

import ThalesPicture from "./images/THALESFRONTfinal.png"
import Techs from "./images/JavaScript-logo.png";

function App() {

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Navbar></Navbar>
      <div
        id="home"
        className="flex flex-row flex-wrap justify-center items-center h-screen w-screen bg-slate-800"
      >
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-6xl font-bold text-blue-500 m-5">
            Thales Cardoso
          </h1>
          <h3 className="text-4xl text-blue-100 m-5">FRONT-END DEVELOPER</h3>

          <div className="flex flex-wrap gap-20 m-10 ">
            <a href="">
              <RiLinkedinBoxLine className="h-16 w-16 fill-blue-100 hover:scale-105 hover:fill-blue-500 hover:rotate-3 transition-all" />
            </a>
            <a href="#contact">
              <RiMailOpenLine className="h-16 w-16 fill-blue-100 hover:scale-105 hover:fill-blue-500 hover:rotate-3 transition-all" />
            </a>
          </div>
        </div>

        <div className="flex flex-col grow justify-center items-center relative h-full bg-gradient-to-r from-slate-800 to-blue-900">
          <img
            className="absolute right-[10%] w-[200%] hover:scale-[101%] transition-all"
            src={ThalesPicture}
            alt="Picture of the developer"
          />
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center h-96 w-screen bg-slate-100"
        id="projects"
      ></div>

      <div
        className="flex flex-col justify-center items-center h-96 w-screen bg-slate-800"
        id="resume"
      ></div>

      <div
        className="flex flex-col justify-center items-center h-96 w-screen bg-slate-200"
        id="contact"
      ></div>
    </div>
  );
}

export default App
