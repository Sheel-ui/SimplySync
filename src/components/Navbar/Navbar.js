import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faCalendar, faUsers, faEnvelope, faUser, faCog, faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return ( 
        <div className="Navbar">
                    <div className="navitem title">
                        SimplySync
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faHome} /> Home
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faBell} /> Notice
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faCalendar} /> Calendar
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faUsers} /> Group
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} /> Messages
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faUser} /> Profile
                    </div>
                    <div className="navitem">
                        <FontAwesomeIcon className="icon" icon={faCog} /> Settings
                    </div>
                    <div className="navitem bottom">
                        <FontAwesomeIcon className="icon" icon={faBars} /> More
                    </div>
        </div>
     );
}
 
export default Navbar;