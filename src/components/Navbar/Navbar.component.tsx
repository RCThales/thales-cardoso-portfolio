import {
  RiAncientPavilionLine,
  RiCodeSLine,
  RiMailSendLine,
  RiFileDownloadLine,
} from "react-icons/ri";
import { BsFillMoonStarsFill, BsStackOverflow } from "react-icons/bs";

import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../Context/theme.context";

export const Navbar = () => {
  const [navBar, setNavBar] = useState("navbar");
  const [theme, setTheme] = useState("dark");
  const { setCurrentTheme } = useContext(ThemeContext);

  const triggerMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      setCurrentTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
    setCurrentTheme("dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  let userTheme: string = "";
  let systemTheme: boolean = false;

  useEffect(() => {
    userTheme = localStorage.getItem("theme") || "dark";
    systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      return;
    }
  }, []);

  return (
    <>
      <nav
        className="shadow-lg hidden flex-col fixed left-0 h-30 top-0 gap-10 p-3
       lg:flex
        lg:flex-row
        text-white w-screen z-50 bg-[#FFFDFA] rounded-b-10 dark:bg-slate-800"
      >
        <a className="navbar-items p-3" href="#home">
          <RiAncientPavilionLine />
          <span>HOME</span>
        </a>
        <a className="navbar-items p-3" href="#projects">
          <RiCodeSLine className="w-24" />
          <span>PROJECTS</span>
        </a>

        <a className="navbar-items p-3" href="#resume">
          <RiFileDownloadLine />
          <span>RESUMÉ</span>
        </a>
        <a className="navbar-items p-3" href="#contact">
          <RiMailSendLine />
          <span>CONTACT</span>
        </a>
        <a className="navbar-items p-3" href="#stack">
          <BsStackOverflow />
          <span>STACK</span>
        </a>
        <button onClick={triggerMode} className="navbar-buttons p-3">
          <BsFillMoonStarsFill />
          <span>Dark Mode</span>
        </button>
      </nav>

      <nav
        className="flex justify-evenly hidden shadow-lg lg:hidden flex-col fixed left-0 h-screen top-0 gap-10 p-3
        text-white w-screen z-50 bg-[#FFFDFA] rounded-b-10 dark:bg-slate-800"
      >
        <a className="navbar-items p-3" href="#home">
          <RiAncientPavilionLine />
          <span>HOME</span>
        </a>
        <a className="navbar-items p-3" href="#projects">
          <RiCodeSLine className="w-24" />
          <span>PROJECTS</span>
        </a>
        <a className="navbar-items p-3" href="#resume">
          <RiFileDownloadLine />
          <span>RESUMÉ</span>
        </a>
        <a className="navbar-items p-3" href="#contact">
          <RiMailSendLine />
          <span>CONTACT</span>
        </a>
        <a className="navbar-items p-3" href="#stack">
          <BsStackOverflow />
          <span>STACK</span>
        </a>
        <button onClick={triggerMode} className="navbar-buttons p-3">
          <BsFillMoonStarsFill />
          <span>Dark Mode</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
