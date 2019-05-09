import React, {Component} from 'react';
import './CSS/login.css';
import fire from'../fire'
import firebase from 'firebase'

class Login extends Component{
  render(){
    return(
      <div className="jumbotron">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">This is a simple to-do-list programm to help you organize all of your coming up events</p>
        <hr className="my-4"/>
        <p>Enjoy!</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
        </p>
      </div>
    )
  }
}
export default Login
