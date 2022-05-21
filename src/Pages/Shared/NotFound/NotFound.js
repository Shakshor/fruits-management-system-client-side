import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';


const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found-area'>
            <div className='not-found-container'>
                <h2>Page not found</h2>
                <h1>404</h1>
                <button className='back-btn' onClick={() => navigate('/')}>Go Back</button>
            </div>
        </div>
    );
};

export default NotFound;