import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="banner py-5 px-4">
                        <div className='banner-text col-lg-6 py-5'>
                            <h1 className='py-5 text-white'>Show Our Best Services Food To Discover Your New Health</h1>
                            <p className='text-white'>Producing Safe, Nutritious Food For Everyone, In A Sustainable And Affordable Manner. Discover The Latest Trends And Innovations For A Sustainable Future. Find Out More! UK. Charity No. 1040519. Join Our Movement. International Non-Profit. Support Our Work.</p>
                            <button className='banner-btn'><Link to='/services'>Explore Our Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2 className='text-center py-3'>Explore Our Service </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;