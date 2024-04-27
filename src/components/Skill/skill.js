import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGolang,
	faErlang,
	faRust,
	faVuejs,
	faJenkins,
	faDocker,
	faAws,
	faLinux,
	faWindows,
	faUbuntu,
	faDebian,
	faHtml5,
	faCss3,
	faReact,
	faNode,
	faJs,
	faGithub,
	faPhp,
	faAndroid,
	faPython,
	faJava,
	faSwift,
	faAngular,
	faSass,
	faLess,
	faBootstrap,
	faGit,
	faNpm,
	faTumblr,
	faJoomla,
    faNodeJs,
    faSlack,
    faMedium,
    faYoutube,
    faKaggle,
    faWordpress,
    faWebflow,
    faJira,
    faFigma,
    faStackExchange,
    faGitlab
} from "@fortawesome/free-brands-svg-icons";

const Skill = ({user}) => {

	const skills = {
		"faGolang": faGolang,
		"faErlang": faErlang,
		"faRust": faRust,
		"faVuejs": faVuejs,
		"faJenkins": faJenkins,
		"faDocker": faDocker,
		"faAws": faAws,
		"faLinux": faLinux,
		"faWindows": faWindows,
		"faUbuntu": faUbuntu,
		"faDebian": faDebian,
		"faHtml5": faHtml5,
		"faCss3": faCss3,
		"faReact": faReact,
		"faNode": faNode,
		"faJs": faJs,
		"faGithub": faGithub,
		"faPhp": faPhp,
		"faAndroid": faAndroid,
		"faPython": faPython,
		"faJava": faJava,
		"faSwift": faSwift,
		"faAngular": faAngular,
		"faSass": faSass,
		"faLess": faLess,
		"faBootstrap": faBootstrap,
		"faGit": faGit,
		"faNpm": faNpm,
		"faTumblr": faTumblr,
		"faJoomla": faJoomla,
		"faNodeJs": faNodeJs,
		"faSlack": faSlack,
		"faMedium": faMedium,
		"faYoutube": faYoutube,
		"faKaggle": faKaggle,
		"faWordpress": faWordpress,
		"faWebflow": faWebflow,
		"faJira": faJira,
		"faFigma": faFigma,
		"faStackExchange": faStackExchange,
		"faGitlab": faGitlab
	}

	return (
		<div className="skills">
		{
			user.skills.map((skill)=>(
				<div>
				{skills[skill] && <FontAwesomeIcon className="skill-icon" icon={skills[skill]} />}
				</div>
			))
		}
		</div>
	);
};

export default Skill;
