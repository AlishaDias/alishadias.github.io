import Navbar from "./components/NavBar/navbar";
import Introduction from  "./components/Introduction/introduction";
import Experience from "./components/Experience/experience";
import Project from "./components/Projects/project";
import Skills from "./components/Skills/skills";
import FixedIcons from "./components/FixedIcons/fixedicons";
import ContactMe from "./components/ContactMe/contactme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FixedIcons />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
