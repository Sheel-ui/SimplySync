const Info = () => {
    return ( 
        <div className="Info">
            <div className="container d-flex justify-content-center align-items-center">
                <form className="board">
                    <div className="form-group">
                        <label for="firstname">Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" required />
                        <br />
                        <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Street Address" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>

                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputCity">State</label>
                            <input type="text" className="form-control" id="inputState" />
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
 
export default Info;