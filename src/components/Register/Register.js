import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Register = () => {
    return (
        <div className="form-align">
            <div >
                <h2>Create Account</h2>
                <form >
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have account? <Link to="/login">Please Login</Link></p>
                <div>-----------or----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;