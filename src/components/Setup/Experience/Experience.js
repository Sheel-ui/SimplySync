const Experience = () => {
    return ( 
        <div className="Experience">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <label><b style={{fontSize: "20px"}}>Experience</b></label>
                        <input type="text" className="form-control" id="jobtitle" placeholder="Job Title" required />
                        <br />
                        <input type="text" className="form-control" id="organization" placeholder="Organization" required />
                        <br />
                        <input type="text" className="form-control" id="location" placeholder="Location" />
                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <label for="from">From</label>
                            <input type="text" className="form-control" id="from" placeholder="10/21" />
                            </div>
            
                            <div className="form-group col-md-4">
                                <label for="to">To</label>
                                <input type="text" className="form-control" id="to" placeholder="10/23" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Role Description</label>
                            <textarea className="form-control" id="bio" rows="3" maxlength="4000" placeholder=""></textarea>
                        </div>
                    </div>
                    <div className="text-right">
                        <button type="next" className="btn btn-primary">Next</button>
                        </div>
                </form>
                
            </div>
        </div>
     );
}
 
export default Experience;