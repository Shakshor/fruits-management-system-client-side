import React from 'react';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigateLogin = () => {
        navigate('/login');
    }

    // checking the user
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // creating user for first time
        createUserWithEmailAndPassword(email, password);
        event.target.reset();
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Name' required />
                <input type="email" name='email' placeholder='Enter Email Address' required />
                <input type="password" name='password' placeholder='Enter Password' required />

                <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please login</Link></p>
        </div>
    );
};

export default Register;