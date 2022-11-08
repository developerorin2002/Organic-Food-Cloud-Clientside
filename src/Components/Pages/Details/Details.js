import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaStar, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import userAvatar from '../../Assets/user.png'
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Details.css'
const Details = () => {
    const { user } = useContext(AuthenticationContext)
    const service = useLoaderData();
    const { name, _id, image, price, ratings, details } = service;
    // review state
    const [reviews, setReviews] = useState([]);
    // rating state 
    const [rating, setRating] = useState(0);
    console.log(rating)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // post reviws
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const message = form.message.value;
        const review = {
            email: email,
            productname: name,
            review: message,
            productImage: image,
            productId: _id,
            userImage: user?.photoURL,
            userVerified: true,
            rating: parseInt(rating)


        };
        console.log(review);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Review Added Successfully')
                form.reset();
            })


    };
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className='service-img py-3'>
                            <img src={image} className="w-100 img-fluid" alt="" />
                        </div>
                        <div className='service-desc'>
                            <p>{name}</p>
                        </div>
                        <div className='service-price d-flex justify-content-between'>
                            <p>Price : {price}</p>
                            <p className='d-flex align-items-center'>Ratings : {[...Array(ratings).keys()].map(s => <FaStar className='ratings' />)}</p>
                        </div>
                        <div className="service-details">
                            <p>{details}</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className='text-center'>Want To add A Review ?</h2>
                        {
                            user?.email && user.uid ?
                                <>
                                    <form onSubmit={handleReview}>
                                        <div className='review-avatar text-center py-3'>
                                            {user?.email ? <><img src={user.photoURL} alt="" /></> : <><img src={userAvatar} alt="" /></>}
                                        </div>
                                        <div>
                                            <input readOnly className='w-100 py-2 review-input' defaultValue={user?.email} type="email" name='email' />
                                        </div>
                                        <div>
                                            <p>Write A Review</p>
                                            <textarea className='w-100 py-2 review-input' name="message" id="" cols="50" rows="5"></textarea>
                                        </div>
                                        <div className='rating'>
                                            <p className="d-flex align-items-center">Rate Our Product :
                                                <select onChange={(event) => setRating(event.target.value)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <FaStar className="rate-icon mx-2"></FaStar>

                                            </p>
                                        </div>
                                        <div>
                                            <button type="submit" className='review-btn my-2'>Submit</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='text-center'>
                                        <button className='login-btn review-login'><Link to="/login">Please Login</Link> <FaUser></FaUser></button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h1 className='text-center review-main-text py-3'>See Our User Review </h1>
                    {
                        reviews.map(review => <ReviewCard reviewinfo={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;