import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    const from = location.state?.from?.pathname || '/';

    // react firebase hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    // loading problem: (back to login page)
    if (loading) {
        return <Loading></Loading>;
    }


    // checking the user 
    if (user) {
        navigate(from, { replace: true });
    }

    // error
    if (error) {
        errorElement = <p className='text-warning'>Error: {error?.message}</p>
    }

    // form event handler
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    // reset password event handler
    const resetPassword = async () => {
        const email = emailRef.current.value;
        // checking email
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='w-50 mx-auto container'>
            <h2 className='text-primary text-center'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" className='w-50 mb-3 d-block mx-auto' type="submit">
                    Login
                </Button>


                <p>Create an Account <Link to='/register' className='text-decoration-none text-danger'>Register Here!</Link></p>

                {/* ----------- Reset Password --------------*/}
                <p>Forget Password?<button className='btn btn-link text-primary text-decoration-none pe-auto fw-bold' onClick={resetPassword} >Reset Password</button></p>

            </Form>

            {/* ----error --------- */}
            {errorElement}

            {/* -------- social login -------- */}
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;