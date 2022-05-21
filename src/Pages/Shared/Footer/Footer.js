import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className="row">
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase 
                mb-2 text-warning'>Help</h4>
                    <ul>
                        <li><a href='#items'>Products</a></li>
                    </ul>

                </div>
                <div className="col-md-4 footer-item">
                    <h4 className='text-uppercase mb-2 text-warning'>Follow </h4>
                    <ul>
                        <li><a target='_blank' href='https://www.facebook.com/'><FaFacebook /></a></li>
                        <li><a target='_blank' href='https://www.shakshor@gmail.com'><FaEnvelope /></a></li>
                    </ul>
                </div>
                <div className=" col-12 col-md-4 footer-item">
                    <h4 className='text-uppercase mb-2 text-warning'>Contact</h4>
                    <ul>
                        <li><FaPhone style={{ 'marginRight': '10px' }}></FaPhone>01580293626</li>
                    </ul>
                </div>
                <hr />

            </div>
            <div>
                <p className='text-center'><small>SPHOTOGRAPHY &copy;{new Date().getFullYear()} copyrights preserved..</small></p>
            </div>

        </footer>
    );
};

export default Footer;