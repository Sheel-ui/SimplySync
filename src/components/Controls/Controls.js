import "./Controls.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown, faStar, faLightbulb, faBook, faBriefcase, faGraduationCap, faFilter } from '@fortawesome/free-solid-svg-icons';
const Controls = () => {
    return ( 
        <div className="Controls">
            <div className="search-form">
                <div className="search">
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />  Search by Name, Skill or Courses
                </div>
            </div>
            <div className="filters">
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faStar} />Saved
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faLightbulb} />Skills
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faBook} />Courses
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faBriefcase} />Experience
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faGraduationCap} />Year
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
                <div className="filter">
                    <FontAwesomeIcon className="search-icon" icon={faFilter} />All Filters
                    <FontAwesomeIcon className="down-icon" icon={faChevronDown} /></div>
            </div>
        </div>
     );
}
 
export default Controls;