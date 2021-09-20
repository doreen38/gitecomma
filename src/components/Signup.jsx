import React from 'react'
import Header from './Header';
import Headimage from './Headimage';
import Tablets from './Tablets';
import Pictures from './Group525.png';

const Signup = () => {
    return (
        <div class="sign-input" >
            {/* <Header /> */}
            <img src={Pictures} alt="ghbfvhcfvf"/>
                <h3>Let's get started</h3>
                <h3>Create a new account</h3>

            <input className="sign-input"type="text"placeholder="Full Name" />

        </div>
    )
}

export default Signup;
