import React from 'react'
import { Link } from 'react-router-dom';
// import Header from './Header';
import Pictures from './Group525.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    return (
        <div className="Login">
            {/* <Header /> */}
            <Link to="/login">Login</Link>



            <div className="start">
               
                
                <img src={Pictures} alt="ghbfvhcfvf"/>
                <h3>Welcome To E-Com</h3>
                <h3>Sign in to continue</h3>


            </div>
            <div className="input-container">
            <i class="fas fa-envelope"></i>
            <input  className="input-fields"type="text"placeholder="Email" name="email" />

            </div>
            <div className="input-container">
                <i className="fa fa-padlock"></i>
                <input  className="input-fields" type="password" placeholder="password"name="password"/>
                
            </div>
            <button type="submit" class="btn">Sign in</button>

        </div>
        
     


    )
}

export default Login;
