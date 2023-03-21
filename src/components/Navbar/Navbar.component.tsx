import {
  RiAncientPavilionLine,
  RiCodeSLine,
  RiMailSendLine,
  RiFileDownloadLine,
} from "react-icons/ri";
export const Navbar = () => {
  return (
    <>
      <nav className="flex sticky flex-row top-0 left-0 gap-10 p-5 text-white bg-slate-800 flex-wrap z-10 w-screen">
          <a className="navbar-items p-3" href="#home">
            <RiAncientPavilionLine />
            <span className="text-12">Home</span>
          </a>
          <a className="navbar-items p-3" href="#projects">
            <RiCodeSLine className="w-24" />
            <span className="text-lg">Projects</span>
          </a>
          <a className="navbar-items p-3" href="#resume">
            <RiFileDownloadLine />
            <span>Resumé</span>
          </a>
          <a className="navbar-items p-3" href="#contact">
            <RiMailSendLine />
            <span>Contact</span>
          </a>

      </nav>
    </>
  );
};

export default Navbar;
