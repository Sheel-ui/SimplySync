const Skills = () => {
    return ( 
        <div className="Skills">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <label>Skills/Technologies</label>
                        <textarea className="form-control" id="skills" rows="3" maxlength="5000"></textarea>
                        <br />
                        <label>Top Skills</label>
                        <textarea className="form-control" id="topskills" rows="3" maxlength="1000"></textarea>
                        <br />
                        <label>Certifications</label>
                        <textarea className="form-control" id="Certifications" rows="4" maxlength="5000"></textarea>
                        <br />
                    </div>
                    <div className="text-right">
                        <button type="next" className="btn btn-primary">Next</button>
                        </div>
                </form>
            </div>
        </div>
     );
}
 
export default Skills;