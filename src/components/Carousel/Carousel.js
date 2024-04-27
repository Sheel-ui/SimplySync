import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jsonData from "../../data/data.json";
import React, { useState } from "react";
import Profile from "../Profile/Profile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import Skill from "../Skill/skill";

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
	const { data: users} = jsonData;

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
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
				<div style={{padding: "15px"}}> People who have experience </div>
				<Slider {...settings}>
					{users.map((user) => (
						<div
							key={user.id}
							className="card"
							onClick={() => openPopup(user.id)}
						>
							<div className="card-info">
								<div
									className="pic"
									style={{
										backgroundImage: `url(${user.profilePic}${user.gender}/${user.id}.jpg)`,
									}}
								></div>
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
									<div style={{width: "65%"}}>
										<Skill user={user}></Skill>
									</div>
								</div>
								<div className="card-resume">
									<div className="card-title">Resume:</div>
									<a
										href={user.resume.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div
											className="medium-text"
											style={{ marginLeft: "25px" }}
										>
											<b style={{textDecoration: "underline"}}>{user.resume.name}</b>
											<FontAwesomeIcon className="search-icon pl-10" icon={faDownload} />
										</div>
									</a>
								</div>
								<div className="card-detail">
									<div
										className="stick bg-dark card-title"
										style={{ marginRight: "0" }}
									>
										<b>Bio:</b>
									</div>
									<div
										className="small-text"
										style={{
											whiteSpace: "pre-wrap",
											hyphens: "auto",
										}}
									>
										{user.bio}
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			<div className="Carousel-item">
			<div style={{padding: "15px"}}>
					People who are skilled in Javascript
				</div>
				<Slider {...settings}>
					{users.map((user) => (
						<div
							key={user.id}
							className="card"
							onClick={() => openPopup(user.id)}
						>
							<div className="card-info">
								<div
									className="pic"
									style={{
										backgroundImage: `url(${user.profilePic}${user.gender}/${user.id}.jpg)`,
									}}
								></div>
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
									<div style={{width: "65%"}}>
										<Skill user={user}></Skill>
									</div>
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
										<div
											className="medium-text"
											style={{ marginLeft: "10px" }}
										>
											<b style={{textDecoration: "underline"}}>{user.resume.name}</b>
											<FontAwesomeIcon className="search-icon pl-10" icon={faDownload} />
										</div>
									</a>
								</div>
								<div className="card-detail">
									<div
										className="stick bg-dark card-title"
										style={{ marginRight: "0" }}
									>
										<b>Bio:</b>
									</div>
									<div
										className="small-text"
										style={{
											whiteSpace: "pre-wrap",
											hyphens: "auto",
										}}
									>
										{user.bio}
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
			{showPopup && (
				<Popup userId={selectedUserId} onClose={closePopup} />
			).reverse()}
		</div>
	);
};

export default Carousel;
