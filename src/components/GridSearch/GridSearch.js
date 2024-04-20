import './GridSearch.css'
import { useState } from 'react';
import jsonData from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faNode, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import Profile from '../Profile/Profile';


const Popup = ({ userId, onClose }) => {
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <Profile id={userId} showIcon={true} onClose={onClose} /> 
        </div>
      </div>
    );
  } 

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

    const [showPopup, setShowPopup] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const openPopup = (userId) => {
        setSelectedUserId(userId); // Set the selected user ID
        setShowPopup(true);
    }
    
    const closePopup = () => {
        setSelectedUserId(null); // Reset the selected user ID
        setShowPopup(false);
    }

    return ( 
        <div className="GridSearch">
            {
                users.map((user)=>(
                    <div className="grid" onClick={() => openPopup(user.id)} >
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
                                {user.resume.name}
                            </div>
                        </a>
                    </div>
                ))
            }
        {showPopup && <Popup userId={selectedUserId} onClose={closePopup} />}
        </div>
     );
}
 
export default GridSearch;