import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme.context";
import ProjectDetails from "../ProjectDetails/ProjectDetails.component";

export interface Tech {
  img: string;
  name: string;
}

export interface Projects {
  [projectId: number]: {
    title: string;
    text: string;
    imgs: Array<string>;
    techs: Array<Tech>;
    demoLink: string;
    repoLink: string;
  };
}

const Projects: React.FC = () => {
  const { currentTheme } = useContext(ThemeContext);

  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [imgs, setImgs] = useState([""]);
  const [techs, setTechs] = useState<Tech[]>([]);
  const [demoLink, setDemoLink] = useState("");
  const [repoLink, setRepoLink] = useState("");

  const projects: Projects = {
    1: {
      title: "This Website :)",
      text: "Introducing my portfolio website - a dynamic and responsive platform coded entirely by me using React, Tailwind, HTML, and CSS. I carefully crafted the design and structure to ensure it's visually appealing and easy to navigate. My hands-on approach allowed me to fine-tune every detail, resulting in a true reflection of my web development skills and passion. Discover my dedication to excellence and explore my portfolio website now!",
      imgs: [
        "../../../src/images/projects/1 IMG1.jpg",

        "../../../src/images/thiswebsite.jpg",
        "../../../src/images/projects/GIF 1.gif",
      ],
      techs: [
        {
          img: "../../../src/images/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "../../../src/images/csslogo.webp",
          name: "CSS",
        },
        {
          img: "../../../src/images/ts.svg",
          name: "Typescript",
        },
        {
          img: "../../../src/images/JavaScript-logo.png",
          name: "Javascript",
        },
        {
          img: "../../../src/images/React.png",
          name: "React",
        },
        {
          img: "../../../src/images/Tailwind_CSS_Logo.svg.png",
          name: "Tailwind",
        },
      ],
      demoLink: "https://thalescardoso.com/",
      repoLink: "https://github.com/RCThales/thales-cardoso-portfolio",
    },
    2: {
      title: "Batour Website",
      text: "Introducing BATOUR - an e-commerce platform that offers premium organic dried fruits sourced from Afghanistan, empowering women with job opportunities. As a front-end developer, I was responsible for coding the entire website using cutting-edge technologies including NEXT.js, React, SASS, HTML, CSS, and JavaScript. I also integrated Firebase for authentication and database management, ensuring secure transactions and data storage. From the initial design stages to the final deployment, I was hands-on with every aspect of the project, fine-tuning every detail to deliver an exceptional user experience. BATOUR is not just a website, but a social enterprise that promotes sustainability and empowers women, and I am proud to have played a part in bringing this vision to life.",
      imgs: [
        "../../../src/images/batour.jpg",

        "../../../src/images/projects/batour2.gif",
        "../../../src/images/projects/batour3.gif",
      ],
      techs: [
        {
          img: "../../../src/images/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "../../../src/images/csslogo.webp",
          name: "CSS",
        },
        {
          img: "../../../src/images/next-js.png",
          name: "Next.JS 13",
        },
        {
          img: "../../../src/images/JavaScript-logo.png",
          name: "Javascript",
        },
        {
          img: "../../../src/images/React.png",
          name: "React",
        },
        {
          img: "../../../src/images/firebase_logo.png",
          name: "Firebase",
        },
      ],
      demoLink: "https://batour.ca/",
      repoLink: "https://github.com/RCThales/Batour-Official-Website",
    },
    3: {
      title: "ThalesBoy Color",
      text: "ThalesBoy Color is a web-based video game inspired by Nintendo's Gameboy Color. I built the entire game from scratch using Vanilla Javascript, CSS, and HTML, and it's fully playable in your web browser. The game features classic pixelated graphics and chiptune soundtrack, and it's responsive, adapting seamlessly to any device. ThalesBoy Color is a testament to my skills as a front-end developer and a fun addition to my portfolio.",
      imgs: [
        "../../../src/images/thalesboy.jpg",

        "../../../src/images/projects/thalesboy2.jpg",
        "../../../src/images/projects/thalesboy3.gif",
      ],
      techs: [
        {
          img: "../../../src/images/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "../../../src/images/csslogo.webp",
          name: "CSS",
        },
        {
          img: "../../../src/images/JavaScript-logo.png",
          name: "Javascript",
        },
      ],
      demoLink: "https://thalesboycolor.netlify.app/",
      repoLink: "https://github.com/RCThales/thales-cardoso-portfolio",
    },
    4: {
      title: "Compile it",
      text: "Compile It is a Unity game I created using C#, with all art and music made by me. Despite not being a front-end project, I love making indie games in my free time. The game is set in a futuristic world with challenging obstacles, enemies (bugs), and much needed coffee mugs. It features a simple gameplay, with custom music and difficulty levels. Compile It is a fun and challenging game that showcases my programming, art, and music skills.",
      imgs: [
        "../../../src/images/compileit.jpg",

        "../../../src/images/projects/compileit2.gif",
      ],
      techs: [
        {
          img: "../../../src/images/unitylogo.png",
          name: "Unity",
        },
        {
          img: "../../../src/images/csharp_logo.png",
          name: "C#",
        },
        {
          img: "../../../src/images/pslogo.png",
          name: "Photoshop",
        },
      ],
      demoLink: "https://thandoros.itch.io/compile-it",
      repoLink: "https://github.com/RCThales/thales-cardoso-portfolio",
    },
  };

  console.log(projects[1].techs[0].img);
  const toggleProjectModal = (id: number) => {
    if (id !== 0) {
      setTitle(projects[id as keyof typeof projects].title);
      setText(projects[id as keyof typeof projects].text);
      setImgs(projects[id as keyof typeof projects].imgs);
      setTechs(projects[id as keyof typeof projects].techs);
      setDemoLink(projects[id as keyof typeof projects].demoLink);
      setRepoLink(projects[id as keyof typeof projects].repoLink);
    }

    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ProjectDetails
        toggle={() => toggleProjectModal(0)}
        visible={modalVisible}
        title={title}
        text={text}
        imgs={imgs}
        techs={techs}
        demoLink={demoLink}
        repoLink={repoLink}
      />
      <div
        id="projects"
        className="flex flex-col relative z-20 justify-center items-center w-screen transition-colors bg-[#FFFDFA] dark:text-white dark:bg-slate-600 pb-32 pt-40 lg:pt-0"
      >
        <h2 className="text-5xl bold font-std mb-20 dark:text-white">
          MY WORK
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-respgrid w-screen gap-20 pb-24 lg:mb-[20%] z-20">
          {/*PROJECT 1 THIS WEBSITE*/}
          <div className="flex flex-col font-std justify-center items-center">
            <button
              onClick={() => toggleProjectModal(1)}
              className={
                currentTheme === "dark"
                  ? "project bg-[url('./src/images/thiswebsite_dark.jpg')]  transition-all"
                  : "project bg-[url('./src/images/thiswebsite_light.jpg')]  transition-all"
              }
            ></button>
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
            <button
              onClick={() => toggleProjectModal(2)}
              className="project bg-[url('./src/images/batour.jpg')]  transition-all"
            ></button>
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
            <button
              onClick={() => toggleProjectModal(3)}
              className={
                currentTheme === "dark"
                  ? "project bg-[url('./src/images/thalesboy.jpg')]  transition-all"
                  : "project bg-[url('./src/images/thalesboy_light.jpg')]  transition-all"
              }
            ></button>
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
            <button
              onClick={() => toggleProjectModal(4)}
              className="project bg-[url('./src/images/compileit.jpg')] transition-all"
            ></button>
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
          id="resume"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-screen absolute bottom-0"
        >
          <path
            fill={currentTheme === "dark" ? "#1E293B" : "#f3f4f5"}
            className="transition-colors"
            d="M0,32L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Projects;
