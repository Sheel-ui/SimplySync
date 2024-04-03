const Urls = () => {
    return ( 
        <div className="Urls">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <input type="text" className="form-control" id="github" placeholder="Github URL" />
                        <br />
                        <input type="text" className="form-control" id="linkedin" placeholder="LinkedIn URL" />
                        <br />
                        <input type="text" className="form-control" id="portfolio" placeholder="Portfolio URL" />
                        <br />
                        <label>Other URLs</label>
                        <input type="text" className="form-control" id="other" placeholder="https://www.myurl.com" />
                    </div>
                    <div className="text-right">
                        <button type="next" className="btn btn-primary">Submit</button>
                        </div>
                </form>
            </div>
        </div>
     );
}
 
export default Urls;