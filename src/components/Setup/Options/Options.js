import "./Options.css"

const Options = () => {
    return ( 
        <div className="Options">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="board">
                    <h1>Setup your Profile</h1>
                    <br />
                    <br />
                    <div className="btn-group-vertical d-flex justify-content-center">

                        <button type="button" className="btn btn-outline-secondary">Upload your Resume</button>
                        <button type="button" className="btn btn-outline-secondary">Connect with LinkedIn</button>
                        <button type="button" className="btn btn-outline-secondary">Connect with Indeed</button>
                        <button type="button" className="btn btn-outline-secondary">Setup Manually</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Options;