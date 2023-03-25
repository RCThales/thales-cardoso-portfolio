import React from "react";
import {
  RiGithubLine,
  RiSearchEyeLine,
  RiCloseCircleLine,
} from "react-icons/ri";

export interface Tech {
  img: string;
  name: string;
}

interface Props {
  visible: boolean;
  title: string;
  text: string;
  imgs: Array<string>;
  techs: Array<Tech>;
  demoLink: string;
  repoLink: string;
  toggle: () => void;
}

const ProjectDetails: React.FC<Props> = ({
  toggle,
  visible,
  title,
  text,
  imgs,
  techs,
  demoLink,
  repoLink,
}) => {
  if (!visible) return null;

  const toggleModal = () => {
    toggle();
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className="cursor-pointer fixed mx-auto my-auto inset-0 bg-black h-screen w-screen opacity-50 z-[60]"
      ></div>
      <div className="fixed z-[70] font-std  inset-0 mx-auto my-auto w-[80%] h-[90%] max-w-[90%] max-h-[90%] overflow-y-auto rounded-lg bg-white dark:bg-slate-500 shadow-2xl">
        <button
          onClick={toggleModal}
          className="absolute top-0 right-0 p-1 m-2 mr-4 text-3xl text-black dark:text-white active:scale-[90%] transition-all "
        >
          <RiCloseCircleLine />
        </button>
        <div className="flex flex-col gap-10 justify-center items-center  w-full text-black dark:text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl m-10 text-center">
            {title}
          </h1>
          {imgs.map((e, index) => {
            return (
              <img
                key={"project_pic_"+index}
                src={e}
                alt={`Project picture ${index+1}`}
                className="w-[90%] h-auto rounded-lg shadow-lg cursor-pointer "
              />
            );
          })}
          <p className="py-10 text-2xl lg:text-4xl w-[80%] font-std-p">
            {text}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-std">
            TECH USED
          </h2>
          <div className="flex flex-wrap justify-evenly items-end max-w-[90%] gap-10 text-white bg-red-500 dark:bg-slate-600 rounded-lg p-10 shadow-md">
            {techs.map((e, index) => {
              return (
                <div className="flex flex-col justify-center items-center">
                  <img
                    key={"tech_info_" + index}
                    src={e.img}
                    alt="Project pictures"
                    className="w-20 h-auto rounded-lg"
                  />
                  <h4 className="text-2xl">{e.name}</h4>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-std text-center mt-10">
            SEE IT IN ACTION!
          </h2>
          {title === "This Website :)" ? (
            <p className="text-2xl text-center font-std-p">
              Well... in this case, you already are 😂
            </p>
          ) : null}

          <a target="_blank" href={demoLink}>
            <RiSearchEyeLine className="fill-white bg-red-500 dark:bg-slate-600 h-20 w-20 p-2 rounded-lg text-6xl hover:scale-[105%] shadow-md transition-all mb-10"></RiSearchEyeLine>
          </a>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-std text-center">
            GITHUB REPOSITORY!
          </h2>
          <a target="_blank" href={repoLink}>
            <RiGithubLine className="fill-white bg-red-500 dark:bg-slate-600 h-20 w-20 p-2 rounded-lg text-6xl hover:scale-[105%] shadow-md transition-all mb-10"></RiGithubLine>
          </a>
        </div>
      </div>
      s
    </>
  );
};

export default ProjectDetails;
