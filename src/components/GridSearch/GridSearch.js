import './GridSearch.css'
import jsonData from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faNode, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';

const GridSearch = () => {
    const {data:users} =  jsonData;
    const skills = {
        "faHtml5": faHtml5, 
        "faCss3": faCss3, 
        "faReact": faReact, 
        "faNode": faNode, 
        "faJs": faJs, 
        "faGithub": faGithub
    }

    // const LimitedBio = ({ bio }) => {
    //     return (
    //         <div className="medium-text pt-10 pl-10">
    //             {bio.length > 100 ? bio.substring(0, 600) + "..." : bio}
    //         </div>
    //     );
    // }

    return ( 
        <div className="GridSearch">
            {
                users.map((user)=>(
                    <div className="grid" >
                        <div className="list-pic"></div>
                        <div className="pl-10 user-caption">
                            <div className="name pt-10"><b>{user.name}</b></div>
                            <div className="small-text">{user.caption}</div>
                            <div className="small-text">{user.year}</div>
                        </div>

                        <div className='skill-logo'>
                        {
                            user.skills.map((skill)=>(
                                <div>
                                {skills[skill] && <FontAwesomeIcon className="skill-icon" icon={skills[skill]} />}
                                </div>
                            ))
                        }
                        </div>

                        <a href={user.resume.url}target="_blank" rel="noopener noreferrer">
                            <div className="pl-10 pt-10 pr-10 resume-block">
                                <b>{user.resume.name}</b>
                                <div className="pr-10">                            
                                    {/* <FontAwesomeIcon className="search-icon" icon={faEye} /> */}
                                </div>
                            </div>
                        </a>
{/*                         
                        {
                            user.projects.map((project)=>(
                                <>
                            ))
                        } */}
                        {/* <div className='card-bio'>
                            <LimitedBio bio={user.bio} />
                        </div> */}
                    </div>
                ))
            }
        </div>
     );
}
 
export default GridSearch;