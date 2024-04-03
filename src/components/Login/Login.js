import "./Login.css"

const Login = () => {
    return ( 
        <div className="Login">
            <div className="container  d-flex justify-content-center align-items-center">
                <div className="board">
                    <h1>University of Florida</h1>
                    <br />
                    <br />
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;