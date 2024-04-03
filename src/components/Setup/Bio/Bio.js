import "./Bio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Bio = () => {
    return ( 
        <div className="Bio">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="board">
                    <form>
                        <div className="form-group text-center">
                            <label for="photo" className="photo-upload">
                                <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <input type="file" id="photo" accept="image/*" />
                        </div>
                        <div className="form-group">
                            <label>I am a </label>
                            <select className="custom-select" id="gradyr">
                                <option selected>Choose...</option>
                                <option value="1">Freshman</option>
                                <option value="2">Sophomore</option>
                                <option value="3">Junior</option>
                                <option value="4">Senior</option>
                                <option value="5">Graduate</option>
                                <option value="6">PhD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="bio">Bio</label>
                            <textarea className="form-control" id="bio" rows="3" maxlength="2000" placeholder="Hi, I am a"></textarea>
                
                        </div>
                    
                        <div className="form-group">
                            <label>Looking for teammates in</label>
                            <textarea className="form-control" id="teammates" rows="3" maxlength="2000" placeholder=""></textarea>
                
                        </div>
                        
                        
                        <div className="text-right">
                            <button type="next" className="btn btn-primary">Next</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Bio;