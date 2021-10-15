import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop'
    const signInGoogleHandle = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const { user } = useAuth()

    return (
        <div className="form-align">
            <div >
                <h2>Please Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter Your Name" defaultValue={user.displayName} {...register("name")} />
                    <br />
                    <input placeholder="Enter Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <br />
                    <input type="submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>-----------or----------</div>
                <button onClick={signInGoogleHandle} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;