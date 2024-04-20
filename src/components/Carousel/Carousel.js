import "./Carousel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import jsonData from '../../data.json';
import React, { useState } from 'react';
import Profile from "../Profile/Profile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from  '@fortawesome/free-solid-svg-icons';


const Popup = ({ userId, onClose }) => {
    const handleCloseClick = () => {
      onClose(); 
    };
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <Profile id={userId} /> 
          <div className="close-icon" onClick={handleCloseClick}>
            <FontAwesomeIcon   icon={faXmark} />
          </div>
        </div>
      </div>
    );
  } 

const Carousel = () => {
    const {data:users} =  jsonData;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

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
        <div className="Slide w-3/4 m-auto">
            <div className="Carousel-item">
                <div className="Carousel-title" >People who have experience</div>
                    <Slider {...settings}>
                        {users.map((user) =>(
                            <div key={user.id} className="card" onClick={() => openPopup(user.id)}>
                                <div className="card-pic"></div>
                                <div className="pl-10">
                                <div className="name pt-10"><b>{user.name}</b></div>
                                <div className="small-text">{user.year}</div>
                                <div className="small-text">{user.caption}</div>
                                </div>
                               
                            </div>
                        ))}
                    </Slider>
            </div>
            {showPopup && <Popup userId={selectedUserId} onClose={closePopup} />}
        </div>
     );
     
     
}
 
export default Carousel;