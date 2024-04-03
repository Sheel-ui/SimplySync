const Projects = () => {
    return ( 
        <div className="Projects">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <label><b style={{fontSize: "20px"}}>Project</b></label>
                        <input type="text" className="form-control" id="projecttitle" placeholder="Project Title" required />
                        <br />
                        <textarea className="form-control" id="description" rows="3" maxlength="5000" placeholder="Project Description"></textarea>
                        <br />
                        <textarea className="form-control" id="skills" rows="3" maxlength="5000" placeholder="Skills/Technologies"></textarea>
                    <br/>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <label for="from">From</label>
                            <input type="text" className="form-control" id="from" placeholder="10/21" />
                            </div>
            
                            <div className="form-group col-md-4">
                                <label for="to">To</label>
                                <input type="text" className="form-control" id="to" placeholder="10/23"/>
                            </div>
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
 
export default Projects;