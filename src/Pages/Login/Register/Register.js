import React, { useState } from 'react';
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    // react firebase hooks
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigateLogin = () => {
        navigate('/login');
    }

    // checking the user
    if (user) {
        console.log(user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // creating user for first time
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

        event.target.reset();
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Enter Name' required />
                <input type="email" name='email' placeholder='Enter Email Address' required />
                <input type="password" name='password' placeholder='Enter Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>

                <input disabled={!agree} type="submit" className='btn btn-primary mt-2' value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;