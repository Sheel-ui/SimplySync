import { useState } from "react";
import Profile from "../Profile/Profile";
import "./ListSearch.css"
import List from "../List/List";

const ListSearch = () => {
    const [userId, setuserId] = useState(0);
    console.log("from profile "+ userId)
    const handleUserClick = (id) => {
      console.log('profile clicked')
      setuserId(id);
    };
    return ( 
        <div className="ListSearch">
            <List onUserClick={handleUserClick}></List>
            <Profile id={userId} showIcon={false}></Profile>
        </div>
     );
}
 
export default ListSearch;