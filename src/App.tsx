import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.component";
import { RiFileDownloadLine } from "react-icons/ri";

import ThalesPicture from "./images/THALESFRONTEND.png";
import ContactForm from "./components/Contact/Contact.component";
import Hero from "./components/Hero/Hero.component";
import Projects from "./components/Projects/Projects.component";
import Resume from "./components/Resume/Resume.component";

function App() {

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Navbar></Navbar>

      <Hero picture={ThalesPicture}></Hero>

      <Projects />

      <Resume />

      <ContactForm></ContactForm>

      <div className="bg-[#f3f4f5] overflow-hidden dark:bg-slate-800 transition-all">
        <h3 className="flex justify-center w-screen m-10 text-3xl lg:text-5xl font-std dark:text-white transition-all">
          TECH I USE THE MOST
        </h3>

        <div
          id="stack"
          className=" flex flex-wrap gap-10 justify-center items-center h-auto w-full mb-10"
        >
          <div className="flex flex-wrap gap-20 justify-center items-center max-w-[90%]">
            <img
              className="w-24 h-24 p-1"
              src="../src/images/React.png"
              alt=""
            />
            <img
              className="w-24 h-24 p-1"
              src="../src/images/JavaScript-logo.png"
              alt=""
            />
            <img
              className="w-24 h-24 p-1"
              src="../src/images/next-js.png"
              alt=""
            />
            <img
              className="w-24 h-24 p-1"
              src="../src/images/Tailwind_CSS_Logo.svg.png"
              alt=""
            />
            <img
              className="w-24 h-24 p-1"
              src="../src/images/sass.png"
              alt=""
            />
            <img className="w-24 h-24 p-1" src="../src/images/ts.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
