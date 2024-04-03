const Education = () => {
    return ( 
        <div className="Education">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <label ><b style={{ fontSize: "20px" }}>Education</b></label>
                        <input type="text" className="form-control" id="university" placeholder="University" required />
                        <br />
                        <input type="text" className="form-control" id="degree" placeholder="Degree" required />
                        <br />
                        <input type="text" className="form-control" id="major" placeholder="Major" required />
                        <br />

                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <label>GPA</label>
                            <input type="text" className="form-control" id="gpa" placeholder="" />
                            </div>
                        </div>
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
                    </div>
                    <div className="text-right">
                        <button type="next" className="btn btn-primary">Next</button>
                        </div>
                </form>
                
            </div>            
        </div>
     );
}
 
export default Education;