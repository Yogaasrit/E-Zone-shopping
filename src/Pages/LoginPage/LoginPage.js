import React, { Component, Fragment } from 'react'
// import { Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
export class LoginPage extends Component {
    state = {
        username: '',
        gender: '',
        password: '',
        email: ''
    }
    handleUserNameUpdate = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleEmailUpdate = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordUpdate = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handlePrint = (event) => {
        this.print()
    }
    print() {
        <div>{this.state.username}</div>
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>
                        User Login
                    </title>
                </Helmet>
                <div><h2>LOGIN PAGE</h2></div>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><h3>User Name :</h3></label>
                        <input type="email" className="form-control" id="username" placeholder="UserName" 
                        onChange={this.handleUserNameUpdate} />
                        <p>{this.state.username}</p>
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1"><h3>Gender</h3></label>
                        <select className="form-control" id="exampleFormControlSelect1" placeholder="Gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>TransGender</option>
                            <option>prefer Not to Say</option>
                        </select>
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><h3>Email address : </h3></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                         placeholder="Enter email" onChange={this.handleEmailUpdate} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                        </small>
                        <p>{this.state.email}</p>
                    </div>
                    <br /><br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><h3>Password : </h3></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                        onChange={this.handlePasswordUpdate} />
                        <p>{this.state.password}</p>
                    </div>
                    <br /><br />
                    <button type="submit" className="btn btn-primary" onClick={this.handlePrint}>Submit</button>
                </form>

            </Fragment>

        )
    }
}

export default LoginPage