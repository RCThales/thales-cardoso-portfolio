import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme.context";
import ProjectDetails from "../ProjectDetails/ProjectDetails.component";

interface Item {
 name: string;
 color: string;
}

interface Props {
  techs: Array<Item>;
  toggleFunction: (e: number) => void;
  projectTitle: string;
  id: number;
  pictureLight: string;
  pictureDark: string;
}

const ProjectItems : React.FC<Props> = ({projectTitle, techs, toggleFunction, id, pictureLight, pictureDark}) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col font-std justify-center items-center">
        <button
          onClick={() => toggleFunction(id)}
          className="w-fit h-fit"
        >
          <img
            className="project transition-all"
            src={currentTheme === "dark" ? pictureDark : pictureLight}
          ></img>
        </button>
        <h3 className="text-xl text-center m-4">{projectTitle}</h3>
        <ul className="flex flex-wrap gap-3 justify-center">
          {techs.map((e) => {
            return (
              <li
                className={`${e.color} w-20 flex justify-center text-white rounded-lg`}
              >
                {e.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProjectItems;
