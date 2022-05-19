import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    // loading 
    if (loading) {
        return <Loading></Loading>;
    }

    // checking the user
    if (user) {
        navigate('/home');
    }

    // error message
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-3 text-danger fw-bold'>or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>

            {/* ------- error showing ------- */}
            {errorElement}


            {/* ------ google button -------- */}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block w-50 mx-auto mt-2'>
                    <img className='' src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;