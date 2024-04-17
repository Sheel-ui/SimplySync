import "./List.css"
import jsonData from '../../data.json';

const List = ({ onUserClick }) => {
    const {data:users} =  jsonData;
    const handleUserClick = (id) => {
        console.log("from list "+id);
        onUserClick(id);
      };


    return ( 
        <div className="List">
            {
                users.map((user)=>(
                    <div className="list-item" onClick={() => handleUserClick(user.id)} >
                    <div className="list-pic"></div>
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