import { RiFileDownloadLine } from "react-icons/ri";

const Resume = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-24 relative z-30 w-screen bg-[#f3f4f5] dark:text-white dark:bg-slate-800 justify-center items-center">
        <div className="flex flex-col justify-start w-full z-40  items-center lg:h-96 lg:justify-center rounded-2xl translate-y-20">
          <ol className="text-[2rem]  lg:text-[3.5rem] font-std flex flex-col mb-40 items-start justify-center lg:block">
            <li className="hover:scale-[102%] transition-all">
              <span className="text-red-500 font-bold">F</span>ocused
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[5px] lg:translate-x-10">
              <span className="text-red-500 font-bold">R</span>esourceful
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[10px] lg:translate-x-20">
              <span className="text-red-500 font-bold">O</span>rganized
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[15px] lg:translate-x-28">
              <span className="text-red-500 font-bold">N</span>ever-give-up
              attitude
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[20px] lg:translate-x-36">
              <span className="text-red-500 font-bold">T</span>eam worker
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[25px] lg:translate-x-44">
              <span className="text-red-500 font-bold">E</span>fficient
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[30px] lg:translate-x-52">
              <span className="text-red-500 font-bold">N</span>urturing
            </li>
            <li className="hover:scale-[102%] transition-all translate-x-[35px] lg:translate-x-60">
              <span className="text-red-500 font-bold">D</span>etail-oriented
            </li>
          </ol>
        </div>

        <div className="relative flex justify-center items-center h-auto w-screen mb-24 m-10 ">
          <a
            download
            href="../src/Files/Resumé-ThalesCardoso.txt"
            className="absolute bottom-0 cursor-pointer flex mb-10 gap-5 translate-y-20 justify-center items-center
            bg-red-600 rounded-xl text-white w-auto max-w-[80%] h-48
            hover:scale-[105%] shadow-xl
             transition-all active:scale-[95%] active:bg-red-800 "
          >
            <RiFileDownloadLine className="text-[15rem] pointer-events-none animate-wiggle" />
            <label className="text-[2rem] lg:text-[4rem] pointer-events-none font-std text-center m-10">
              Download Resumé
            </label>
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
