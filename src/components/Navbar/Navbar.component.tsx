import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsStackOverflow,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  RiAncientPavilionLine,
  RiCodeSLine,
  RiFileDownloadLine,
  RiMailSendLine,
} from "react-icons/ri";

import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/theme.context";

export const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  /*SWIPE TO CLOSE NAVBAR - START*/

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos || prevScrollPos < currentScrollPos) {
      // user has scrolled up or down
      if (navBarOpen) {
        closeNavBarWithSwipe();
      }
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /*SWIPE TO CLOSE NAVBAR - END*/

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

  const toggleNavBar = () => {
    const navbarClasses = document.getElementById("navBarMobile")?.classList;
    if (!navBarOpen) {
      setNavBarOpen(true);
      return;
    }
    navbarClasses?.add("animate-disappearNavbar");
    setTimeout(() => {
      setNavBarOpen(false);
    }, 500);
  };

  const closeNavBarWithSwipe = () => {
    const navbarClasses = document.getElementById("navBarMobile")?.classList;

    navbarClasses?.add("animate-disappearNavbar");

    setTimeout(() => {
      setNavBarOpen(false);
    }, 500);
  };

  const preventDefault = useCallback((event: TouchEvent) => {
    event.preventDefault();
  }, []);

  return (
    <>
      {/*NAVBAR OPENED WHEN ON BIG SCREENS*/}
      <nav
        className="shadow-lg hidden flex-col fixed left-0 top-0 gap-10 p-3
       lg:flex
        lg:flex-row
        text-white w-screen z-50 bg-[#FFFDFA] rounded-b-10 dark:bg-slate-800"
      >
        <a className="navbar-items p-3" href="#home">
          <RiAncientPavilionLine />
          <span className="font-std">HOME</span>
        </a>
        <a className="navbar-items p-3" href="#projects">
          <RiCodeSLine className="w-24" />
          <span className="font-std">PROJECTS</span>
        </a>

        <a className="navbar-items p-3" href="#resume">
          <RiFileDownloadLine />
          <span className="font-std">RESUMÉ</span>
        </a>
        <a className="navbar-items p-3" href="#contact">
          <RiMailSendLine />
          <span className="font-std">CONTACT</span>
        </a>
        <a className="navbar-items p-3" href="#stack">
          <BsStackOverflow />
          <span className="font-std">STACK</span>
        </a>
        <button onClick={triggerMode} className="navbar-buttons p-3">
          {currentTheme === "dark" ? (
            <>
              <BsFillSunFill />
            </>
          ) : (
            <>
              <BsFillMoonStarsFill />
            </>
          )}
        </button>
      </nav>

      {/*NAVBAR CLOSED WHEN ON MOBILE*/}
      <nav
        className="flex justify-evenly items-center shadow-lg lg:hidden h-20 flex-col fixed left-0 top-0 gap-10 p-3
        text-white w-screen z-50 bg-[#FFFDFA] rounded-b-10 dark:bg-slate-800"
      >
        <button onClick={toggleNavBar}>
          <GiHamburgerMenu className="fill-black dark:fill-white" />
        </button>
      </nav>

      {/*NAVBAR OPENED WHEN ON MOBILE*/}
      {navBarOpen && (
        <div
          id="navBarMobile"
          className="animate-appearNavbar transition-all h-screen w-screen flex flex-col fixed mx-auto my-auto inset-0 z-50 justify-evenly items-center bg-[#FFFDFA] dark:bg-slate-800"
        >
          <button onClick={toggleNavBar}>
            <GiHamburgerMenu className="dark:fill-white" />
          </button>
          <a onClick={toggleNavBar} className="navbar-items p-3" href="#home">
            <RiAncientPavilionLine />
            <span className="font-std">HOME</span>
          </a>
          <a
            onClick={toggleNavBar}
            className="navbar-items p-3"
            href="#projects"
          >
            <RiCodeSLine className="w-24" />
            <span className="font-std">PROJECTS</span>
          </a>
          <a onClick={toggleNavBar} className="navbar-items p-3" href="#resume">
            <RiFileDownloadLine />
            <span className="font-std">RESUMÉ</span>
          </a>
          <a
            onClick={toggleNavBar}
            className="navbar-items p-3"
            href="#contact"
          >
            <RiMailSendLine />
            <span className="font-std">CONTACT</span>
          </a>
          <a onClick={toggleNavBar} className="navbar-items p-3" href="#stack">
            <BsStackOverflow />
            <span className="font-std">STACK</span>
          </a>
          <button onClick={triggerMode} className="navbar-buttons p-3">
            {currentTheme === "dark" ? (
              <>
                <BsFillSunFill />
              </>
            ) : (
              <>
                <BsFillMoonStarsFill />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
