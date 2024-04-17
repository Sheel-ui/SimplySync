import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faReact, faNode, faJs } from '@fortawesome/free-brands-svg-icons';
import "./Profile.css"
import jsonData from '../../data.json';

const Profile = ( {id} ) => {
    const {data:users} =  jsonData;
    const user = users[id];
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return ( 
        <div className="Profile">
                <div className="box box1">
                    <div className="pic"></div>
                    <div className="name pt-10"><b>{user.name}</b></div>
                    <div className="small-text">{user.year}</div>
                </div>
                <div className="box box2">
                <div className="name pt-10 pl-10 stick"><b>EDUCATION</b></div>
                    <div className="medium-text pt-10 pl-10 pr-10">{text}</div>
                </div>
                <div className="box box3">
                    <div>
                        <div className="name pt-10 pl-10 stick"><b>BIO</b></div>
                        <div className="medium-text pt-10 pl-10 pr-10">{user.bio}</div>
                    </div>
                </div>
                <div className="box box5">
                    <div className="name pt-10 pl-10 stick"><b>EXPERIENCE</b></div>
                    <div className="medium-text pt-10 pl-10 pr-10">{text}</div>

                </div>
                <div className="box box4">
                    <div className="name pt-10 pl-10"><b>TOP SKILLS</b></div>
                    <div className='top-skills'>
                    <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                    <FontAwesomeIcon className="skill-icon" icon={faCss3} />
                    <FontAwesomeIcon className="skill-icon" icon={faReact} />
                    <FontAwesomeIcon className="skill-icon" icon={faJs} />
                    <FontAwesomeIcon className="skill-icon" icon={faNode} />
                    </div>
                </div>
                <div className="box box6">
                <div className="small-text pl-10 pt-10">{user.resume.lastUpdate}</div>
                        <div className="pl-10 pt-10 resume-block">
                            <b>{user.resume.name}</b>
                            <div className="pr-10">                            
                                <FontAwesomeIcon className="search-icon" icon={faEye} />
                                <FontAwesomeIcon className="search-icon" icon={faDownload} />
                            </div>
                        </div>
                </div>
        </div>
     );
}
 
export default Profile;