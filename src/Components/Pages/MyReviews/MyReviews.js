import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthenticationContext } from '../../AuthContext/AuthContext';
import ReviewCard from '../ReviewCard/ReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthenticationContext);
    const [myReviews , setMyReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyReviews(data))
    },[user.email])
    return (
        <div>
            <div className="container">
                <div className="row">
                        {
                            myReviews.map(review=><ReviewCard key={review._id} reviewinfo={review}></ReviewCard>)
                        }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;