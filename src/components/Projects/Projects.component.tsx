


import React, { useContext } from "react";
import { ThemeContext } from "../../Context/theme.context";

const Projects: React.FC = ({}) => {
    const { currentTheme } = useContext(ThemeContext);
  return (
    <div
      id="projects"
      className="flex flex-col relative z-20 justify-center items-center w-screen transition-all bg-[#FFFDFA] dark:text-white dark:bg-slate-600 pb-32 pt-40 lg:pt-0"
    >
      <h2 className="text-5xl bold font-std mb-20 dark:text-white">MY WORK</h2>
      <div className="grid grid-cols-1 lg:grid-cols-respgrid w-screen gap-20 pb-24 lg:mb-[20%] z-20">
        {/*PROJECT 1 THIS WEBSITE*/}
        <div className="flex flex-col font-std justify-center items-center">
          <button className="project bg-[url('./src/images/thiswebsite.jpg')]"></button>
          <h3 className="text-xl text-center m-4">This Website :)</h3>
          <ul className="flex flex-wrap gap-3 justify-center">
            <li className="bg-blue-600 w-20 flex justify-center text-white rounded-lg">
              REACT
            </li>
            <li className="bg-yellow-600 w-20 flex justify-center text-white rounded-lg">
              Javascript
            </li>
            <li className="bg-blue-400 w-20 flex justify-center text-white rounded-lg">
              Tailwind
            </li>
            <li className="bg-orange-500 w-20 flex justify-center text-white rounded-lg">
              CSS
            </li>
            <li className="bg-black w-20 flex justify-center text-white rounded-lg">
              HTML
            </li>
          </ul>
        </div>
        {/*PROJECT 2 - BATOUR*/}
        <div className="flex flex-col font-std justify-center items-center">
          <button className="project bg-[url('./src/images/batour.jpg')]"></button>
          <h3 className="text-xl text-center m-4">
            Batour Website (<a href="https:/www.batour.ca">www.batour.ca</a>)
          </h3>
          <ul className="flex flex-wrap  gap-3 justify-center">
            <li className="bg-blue-500 w-20 flex justify-center text-white rounded-lg">
              REACT
            </li>
            <li className="bg-yellow-600 w-20 flex justify-center text-white rounded-lg">
              Javascript
            </li>
            <li className="bg-orange-600 w-20 flex justify-center text-white rounded-lg">
              Firebase
            </li>
            <li className="bg-purple-500 w-20 flex justify-center text-white rounded-lg">
              NEXT.JS
            </li>
            <li className="bg-pink-500 w-20 flex justify-center text-white rounded-lg">
              SASS
            </li>
            <li className="bg-black w-20 flex justify-center text-white rounded-lg">
              HTML
            </li>
          </ul>
        </div>
        {/*PROJECT 3 - THALESBOY*/}
        <div className="flex flex-col font-std justify-center items-center">
          <button className="project bg-[url('./src/images/thalesboy.jpg')]"></button>
          <h3 className="text-xl text-center m-4">
            ThalesBoy Color (
            <a target="_blank" href="https://thalesboycolor.netlify.app/">
              https://thalesboycolor.netlify.app/
            </a>
            )
          </h3>
          <ul className="flex flex-wrap  gap-3 justify-center">
            <li className="bg-yellow-600 w-20 flex justify-center text-white rounded-lg">
              Javascript
            </li>
            <li className="bg-orange-500 w-20 flex justify-center text-white rounded-lg">
              CSS
            </li>
            <li className="bg-black w-20 flex justify-center text-white rounded-lg">
              HTML
            </li>
          </ul>
        </div>

        {/*PROJECT 4 - UNITYGAME*/}
        <div className="flex flex-col font-std justify-center items-center">
          <button className="project bg-[url('./src/images/compileit.jpg')]"></button>
          <h3 className="text-xl text-center m-4">
            Compile it (
            <a target="_blank" href="https://thandoros.itch.io/compile-it">
              https://thandoros.itch.io/compile-it
            </a>
            )
          </h3>
          <ul className="flex flex-wrap  gap-3 justify-center">
            <li className="bg-blue-800 w-20 flex justify-center text-white rounded-lg">
              C#
            </li>
            <li className="bg-black w-20 flex justify-center text-white rounded-lg">
              UNITY
            </li>
          </ul>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-screen absolute bottom-0"
      >
        <path
          fill={currentTheme === "dark" ? "#1E293B" : "#f3f4f5"}
          className="transition-all"
          fill-opacity="1"
          d="M0,32L1440,128L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projects;
