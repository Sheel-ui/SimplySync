import "./GridSearch.css";
import { useState } from "react";
import jsonData from "../../data/data.json";
import Profile from "../Profile/Profile";
import Skill from "../Skill/skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Popup = ({ userId, onClose }) => {
	return (
		<div className="popup-overlay">
			<div className="popup-content">
				<Profile id={userId} showIcon={true} onClose={onClose} />
			</div>
		</div>
	);
};

const GridSearch = () => {
	const { data: users } = jsonData;

	const [showPopup, setShowPopup] = useState(false);
	const [selectedUserId, setSelectedUserId] = useState(null);
	const openPopup = (userId) => {
		setSelectedUserId(userId); // Set the selected user ID
		setShowPopup(true);
	};

	const closePopup = () => {
		setSelectedUserId(null); // Reset the selected user ID
		setShowPopup(false);
	};

	return (
		<div className="GridSearch">
			{users.map((user) => (
				<div className="grid" onClick={() => openPopup(user.id)}>
					<div
						className="grid-pic"
						style={{
							backgroundImage: `url(${user.profilePic}${user.gender}/${user.id}.jpg)`,
						}}
					></div>
					<div className="pl-10 user-caption">
						<div className="name pt-10">
							<b>{user.name}</b>
						</div>
						<div className="small-text pt-5">{user.caption}</div>
						<div className="small-text pt-5">{user.year}</div>
					</div>
                    
                    <div style={{ width: "100%"}}>
                    <Skill user={user}></Skill>
                    </div>

					<a
						href={user.resume.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="pl-10 pt-10 pr-10 resume-block medium-text" style={{textDecoration: "underline"}}>
							{user.resume.name}
                            <FontAwesomeIcon className="search-icon pl-10" icon={faDownload} />
						</div>
					</a>
				</div>
			))}
			{showPopup && (
				<Popup userId={selectedUserId} onClose={closePopup} />
			)}
		</div>
	);
};

export default GridSearch;
