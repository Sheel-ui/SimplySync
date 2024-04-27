import "./List.css"
import jsonData from '../../data/data.json'

const List = ({ onUserClick }) => {
    const {data:users} =  jsonData;
    const handleUserClick = (id) => {
        console.log("from list "+id);
        onUserClick(id);
      };

      console.log(users)
    return ( 
        <div className="List">
            {
                users.map((user)=>(
                    <div className="list-item" onClick={() => handleUserClick(user.id)} >
                        <div className="list-pic" style={{ backgroundImage: `url(${user.profilePic}${user.gender}/${user.id}.jpg)` }}></div>
                        {console.log(`url(${user.profilePic}${user.id}.jpg))`)}
                        <div className="pl-10">
                        <div className="name pt-10"><b>{user.name}</b></div>
                        <div className="small-text">{user.caption}</div>
                    </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default List;