import { useContext } from "react";
import {
  RiLinkedinBoxLine,
  RiMailOpenLine,
  RiGithubLine,
} from "react-icons/ri";

interface Props {
  picture: string;
}

import { ThemeContext } from "../../Context/theme.context";

const Hero: React.FC<Props> = ({ picture }) => {

  const {currentTheme} = useContext(ThemeContext)

  return (
    <div
      id="home"
      className="flex pb-20 pt-20 md:pt-20 lg:pt-10 flex-col transition-colors lg:flex-row relative justify-center items-center w-screen bg-cover bg-center bg-[url('./src/images/bg-header.jpg')] dark:bg-[url('./src/images/header-dark.jpg')]"
    >
      <div className="flex flex-col justify-center items-center lg:w-1/2">
        <div className="flex flex-col flex-wrap justify-center items-center gap-2 m-10 ">
          <h2 className="text-4xl lg:text-5xl text-red-500 font-std italic">
            {"<Hello>"}
          </h2>
          <h3 className="text-6xl m-4 text-center font-std-p dark:text-white">
            {"I am Thales Cardoso,"}
          </h3>

          <a
            href="#projects"
            className="text-4xl lg:text-5xl text-red-500 italic cursor-pointer font-std"
          >
            {"<Front-End Developer/>"}
          </a>
          <div className="flex gap-10 m-10 mb-0 z-20 max-w-[90%]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thalesrodriguescardoso/"
            >
              <RiLinkedinBoxLine className=" animate-wiggle h-24 w-24 fill-red-500 hover:scale-105 hover:fill-red-700 hover:rotate-3 transition-colors" />
            </a>
            <a href="mailto:canadathales@gmail.com">
              <RiMailOpenLine className=" animate-wiggle h-24 w-24 fill-red-500 hover:scale-105 hover:fill-red-700 hover:rotate-3 transition-colors" />
            </a>
            <a target="_blank" href="https://github.com/RCThales">
              <RiGithubLine className=" animate-wiggle h-24 w-24 fill-red-500 hover:scale-105 hover:fill-red-700 hover:rotate-3 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2 max-w-[90%] justify-center items-center relative h-full ">
        <img
          className="scale-[150%] translate-y-20 z-40 lg:z-10"
          src={picture}
          alt="Picture of the developer"
        />
      </div>

      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 z-10 transition-colors"
      >
        <path
          className="transition-colors"
          fill={currentTheme === "dark" ? "#475569" : "#FFFDFA"}
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
