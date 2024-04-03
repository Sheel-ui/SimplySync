import "./Setup.css"
import Options from "./Options/Options";
import Bio from "./Bio/Bio";
import Info from "./Info/Info";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Urls from "./Urls/Urls";

const Setup = () => {
    return ( 
        <div className="Setup">
            <Options />
            <Bio />
            <Info />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Urls />

        </div>
     );
}
 
export default Setup;