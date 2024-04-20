import "./Controls.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { faMagnifyingGlass, faChevronDown, faStar, faLightbulb, faBook, faBriefcase, faGraduationCap, faFilter, faList, faSquare, faFilm } from '@fortawesome/free-solid-svg-icons';
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
                <div className="filter view">
                    <Link to="/"><FontAwesomeIcon className="view-icon" icon={faList} /></Link> |
                    <Link to="/grid"><FontAwesomeIcon className="view-icon" icon={faSquare} /></Link> |
                    <Link to="/carousel"><FontAwesomeIcon className="view-icon" icon={faFilm} /></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Controls;