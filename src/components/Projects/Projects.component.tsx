import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/theme.context";
import ProjectDetails from "../ProjectDetails/ProjectDetails.component";
import ProjectItems from "../ProjectItem/ProjectItems.component";

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
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thiswebsite_dark.jpg",

        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/ProjectDetails/thiswebsite2.jpg",
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/ProjectDetails/thiswebsite3.gif",
      ],
      techs: [
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/csslogo.webp",
          name: "CSS",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/ts.svg",
          name: "Typescript",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/js.svg",
          name: "Javascript",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/react.svg",
          name: "React",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/tailwind.svg",
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
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/batour1.jpg",

        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/batour2.gif",
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/batour3.gif",
      ],
      techs: [
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/csslogo.webp",
          name: "CSS",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/next-js.png",
          name: "Next.JS 13",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/js.svg",
          name: "Javascript",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/react.svg",
          name: "React",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/firebase.svg",
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
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thalesboy_dark.jpg",

        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thalesboy_light.jpg",
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thalesboy3.gif",
      ],
      techs: [
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/htmllogo.webp",
          name: "HTML",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/csslogo.webp",
          name: "CSS",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/js.svg",
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
        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/compileit.jpg",

        "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/compileit2.gif",
      ],
      techs: [
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/unity.svg",
          name: "Unity",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/c%23.svg",
          name: "C#",
        },
        {
          img: "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/technologies/psd.svg",
          name: "Photoshop",
        },
      ],
      demoLink: "https://thandoros.itch.io/compile-it",
      repoLink: "https://github.com/RCThales/thales-cardoso-portfolio",
    },
  };

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
          <ProjectItems
            techs={[
              {
                name: "REACT",
                color: "bg-blue-600",
              },
              {
                name: "Javascript",
                color: "bg-yellow-600",
              },
              {
                name: "Tailwind",
                color: "bg-blue-400",
              },
              {
                name: "CSS",
                color: "bg-orange-500",
              },
              {
                name: "HTML",
                color: "bg-black",
              },
            ]}
            projectTitle="This Website =)"
            id={1}
            toggleFunction={toggleProjectModal}
            pictureLight={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thiswebsite1.jpg"
            }
            pictureDark={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thiswebsite_dark.jpg"
            }
          ></ProjectItems>
          {/*PROJECT 2 - BATOUR*/}
          <ProjectItems
            techs={[
              {
                name: "REACT",
                color: "bg-blue-600",
              },
              {
                name: "Javascript",
                color: "bg-yellow-600",
              },
              {
                name: "Firebase",
                color: "bg-orange-600",
              },
              {
                name: "NEXT.JS",
                color: "bg-purple-500",
              },
              {
                name: "SASS",
                color: "bg-pink-500",
              },
              {
                name: "HTML",
                color: "bg-black",
              },
            ]}
            projectTitle="Batour Website"
            id={2}
            toggleFunction={toggleProjectModal}
            pictureLight={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/batour1.jpg"
            }
            pictureDark={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/batour1.jpg"
            }
          ></ProjectItems>

          {/*PROJECT 3 - THALESBOY*/}
          <ProjectItems
            techs={[
              {
                name: "Javascript",
                color: "bg-yellow-600",
              },
              {
                name: "CSS",
                color: "bg-orange-500",
              },
              {
                name: "HTML",
                color: "bg-black",
              },
            ]}
            projectTitle="ThalesBoy Color"
            id={3}
            toggleFunction={toggleProjectModal}
            pictureLight={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thalesboy_light.jpg"
            }
            pictureDark={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/thalesboy_dark.jpg"
            }
          ></ProjectItems>

          {/*PROJECT 4 - UNITYGAME*/}
          <ProjectItems
            techs={[
              {
                name: "Unity",
                color: "bg-black",
              },
              {
                name: "C#",
                color: "bg-blue-800",
              },
            ]}
            projectTitle="Compile It"
            id={4}
            toggleFunction={toggleProjectModal}
            pictureLight={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/compileit.jpg"
            }
            pictureDark={
              "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/Projects/compileit.jpg"
            }
          ></ProjectItems>
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
