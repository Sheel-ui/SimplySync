import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faDownload, faBuilding, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Skill from '../Skill/skill';
import "./Profile.css"
import jsonData from '../../data/data.json'

const Profile = ( {id,showIcon,onClose} ) => {
    const {data:users} =  jsonData;
    const user = users[id];
    
    const handleIconClick = () => {
        if (onClose) {
            onClose();
        }
    };
    return ( 
        <div className="Profile">
            {showIcon && <FontAwesomeIcon className='x-mark'   icon={faXmark} onClick={handleIconClick} />}
                <div className="box box1">
                    <div className="pic" style={{ backgroundImage: `url(${user.profilePic}${user.gender}/${user.id}.jpg)`}}></div>
                    <div className="name pt-10"><b>{user.name}</b></div>
                    <div className="small-text">{user.year}</div>
                </div>
                <div className="box box2">
                    <div className="name pt-10 pl-10 stick"><b>EXPERIENCE</b></div>
                    {        
                        user.experience.map((exp)=>(
                            <div>
                                <div className='company-head'>
                                    <div className="org-pic">
                                        <FontAwesomeIcon className="org-icon" icon={faBuilding} />
                                    </div>
                                    <div>
                                        <div> {exp.name} </div>
                                        <div> {exp.organization} </div>
                                        <div className='small-text'> {exp.designation} </div>
                                        <div className='small-text'> {exp.date} </div>
                                    </div>
                                </div>
                                <div className='org-info pad'>
                                {exp.info.map((line,index)=>(
                                    <div >
                                        <div className='medium-text'>
                                            {index+1}. {line}
                                        </div>
                                    </div>
                                ))}
                                </div>
                        </div>
                        ))
                    }
                </div>
                <div className="box box3">
                    <div>
                        <div className="name pt-10 pl-10 stick"><b>BIO</b></div>
                        <div className="medium-text pt-10 pl-10 pr-10">{user.bio}</div>
                    </div>
                </div>
                <div className="box box5">
                    <div className="name pt-10 pl-10 stick"><b>PROJECTS</b></div>
                    {        
                        user.projects.map((project)=>(
                            <div>
                                <div className='company-head'>
                                    <div className="org-pic">
                                        <FontAwesomeIcon className="org-icon" icon={faGithub} />
                                    </div>
                                    <div>
                                        <div> {project.name} </div>
                                        <div className='small-text'> {project.date} </div>
                                        <div className='small-text'> {project.tech} </div>
                                    </div>
                                </div>
                                <div className='org-info pad'>
                                {project.info.map((line,index)=>(
                                    <div >
                                        <div className='medium-text'>
                                            {index+1}. {line}
                                        </div>
                                    </div>
                                ))}
                                </div>
                        </div>
                        ))
                    }
                </div>
                <div className="box box4">
                    <div className="name pt-10 pl-10"><b>TOP SKILLS</b></div>
                    <Skill user={user}></Skill>
                </div>
                <div className="box box6">
                <div className="small-text pl-10 pt-10">{user.resume.lastUpdate}</div>
                <a href={user.resume.url}target="_blank" rel="noopener noreferrer">
                    <div className="pl-10 pt-10 resume-block medium-text">
                        <b style={{textDecoration: "underline"}}>{user.resume.name}</b>
                        <div className="pr-10">                            
                            <FontAwesomeIcon className="search-icon" icon={faEye} />
                            <FontAwesomeIcon className="search-icon" icon={faDownload} />
                        </div>
                    </div>
                </a>
                </div>
        </div>
     );
}
 
export default Profile;