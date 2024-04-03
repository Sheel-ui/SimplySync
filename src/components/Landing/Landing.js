import "./Landing.css"

const Landing = () => {
    return ( 
        <div className="landing">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center">
                    <select className="custom-select custom-select-lg mb-3">
                        <option selected>Please select your university</option>
                        <option value="1">University of Florida</option>
                    </select>
                    <button type="button" className="btn btn-secondary ">Submit</button>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;