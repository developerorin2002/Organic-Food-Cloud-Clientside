import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import useTitle from '../../Utilities/DynamicTitle/DynamicTitle';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {
    useTitle('My reviews')
    const { user } = useContext(AuthenticationContext);
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user.email])
    return (
        <div>
            <div className="container">
                <h2 className='text-center'>MY REVIEWS</h2>
                <div className="row">
                    {
                        myReviews.map(review => <ReviewCard key={review._id} reviewinfo={review}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;