import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className='footer py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to='/home'>Home</Link>
                        </div>
                        <div className="col-lg-4">

                        </div>
                        <div className="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;