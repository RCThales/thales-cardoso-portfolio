import Navbar from "./components/Navbar/Navbar.component";

//import ThalesPicture from "./images/thalesheropic.png";
import ContactForm from "./components/Contact/Contact.component";
import Hero from "./components/Hero/Hero.component";
import Projects from "./components/Projects/Projects.component";
import Resume from "./components/Resume/Resume.component";
import Technologies from "./components/Technologies/Technologies.component";

function App() {
  const ThalesPicture =
    "https://portfolio-bucket-thalescardoso.s3.amazonaws.com/thalesheropic.png";
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Navbar></Navbar>

      <Hero picture={ThalesPicture}></Hero>

      <Projects />

      <Resume />

      <ContactForm></ContactForm>

      <Technologies></Technologies>
    </div>
  );
}

export default App;
