import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "../../data.json";
import React, { useState } from "react";
import Profile from "../Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faReact,
	faNode,
	faJs,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Popup = ({ userId, onClose }) => {
	return (
		<div className="popup-overlay">
			<div className="popup-content">
				<Profile id={userId} showIcon={true} onClose={onClose} />
			</div>
		</div>
	);
};

const Carousel = () => {
	const { data: users } = jsonData;

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};

	const skills = {
		faHtml5: faHtml5,
		faCss3: faCss3,
		faReact: faReact,
		faNode: faNode,
		faJs: faJs,
		faGithub: faGithub,
	};

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
		<div className="Slide w-3/4 m-auto">
			<div className="Carousel-item">
				<div className="Carousel-title">People who have experience</div>
				<Slider {...settings}>
					{users.map((user) => (
						<div
							key={user.id}
							className="card"
							onClick={() => openPopup(user.id)}
						>
							<div className="card-info">
								<div className="pic"></div>
								<div
									className="name"
									style={{ paddingTop: "10px" }}
								>
									<b>{user.name}</b>
								</div>
								<div
									className="small-text"
									style={{ paddingTop: "5px" }}
								>
									{user.year}
								</div>
								<div
									className="small-text"
									style={{ padding: "5px" }}
								>
									{user.caption}
								</div>
							</div>
							<div className="card-bio">
								<div className="card-skills">
									<div className="card-title">
										<b>Top Skills:</b>
									</div>
									{user.skills.map((skill) => (
										<div>
											{skills[skill] && (
												<FontAwesomeIcon
													className="skill-icon"
													icon={skills[skill]}
													style={{
														padding: "0px 5px",
													}}
												/>
											)}
										</div>
									))}
								</div>
								<div className="card-resume">
									<div className="card-title">
										<b>Resume:</b>
									</div>
									<a
										href={user.resume.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div style={{ marginLeft: "15px" }}>
											<b>{user.resume.name}</b>
										</div>
									</a>
								</div>
								<div className="card-detail">
									<div className="stick bg-dark card-title">
										<b>Bio:</b>
									</div>
									<div className="small-text">{user.bio}</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			<div className="Carousel-item">
				<div className="Carousel-title">People who have experience</div>
				<Slider {...settings}>
					{users.map((user) => (
						<div
							key={user.id}
							className="card"
							onClick={() => openPopup(user.id)}
						>
							<div className="card-info">
								<div className="pic"></div>
								<div
									className="name"
									style={{ paddingTop: "10px" }}
								>
									<b>{user.name}</b>
								</div>
								<div
									className="small-text"
									style={{ paddingTop: "5px" }}
								>
									{user.year}
								</div>
								<div
									className="small-text"
									style={{ padding: "5px" }}
								>
									{user.caption}
								</div>
							</div>
							<div className="card-bio">
								<div className="card-skills">
									<div className="card-title">
										<b>Top Skills:</b>
									</div>
									{user.skills.map((skill) => (
										<div>
											{skills[skill] && (
												<FontAwesomeIcon
													className="skill-icon"
													icon={skills[skill]}
													style={{
														padding: "0px 5px",
													}}
												/>
											)}
										</div>
									))}
								</div>
								<div className="card-resume">
									<div className="card-title">
										<b>Resume:</b>
									</div>
									<a
										href={user.resume.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div style={{ marginLeft: "15px" }}>
											<b>{user.resume.name}</b>
										</div>
									</a>
								</div>
								<div className="card-detail">
									<div className="stick bg-dark card-title">
										<b>Bio:</b>
									</div>
									<div className="small-text">{user.bio}</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			{showPopup && (
				<Popup userId={selectedUserId} onClose={closePopup} />
			)}
		</div>
	);
};

export default Carousel;
