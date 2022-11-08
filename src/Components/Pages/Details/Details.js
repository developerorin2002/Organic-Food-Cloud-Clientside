import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import userAvatar from '../../Assets/user.png'
import './Details.css'
const Details = () => {
    const service = useLoaderData();
    console.log(service)
    const { name, _id, image, price, ratings, details } = service;
    const handleReview = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const message = form.message.value;
        const review = {
            email:email,
            productname:name,
            review:message,
            productImage:image,
            productId:_id

        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        
       
    }
    return (
        <div>
            <div className="container">
                <div className="row">
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
                        <form onSubmit={handleReview}>
                            <div className='review-avatar text-center py-3'>
                                <img src={userAvatar} alt="" />
                            </div>
                            <div>

                                <input className='w-100 py-2 review-input' type="email" name='email' />
                            </div>
                            <div>
                                <p>Write A Review</p>
                                <textarea className='w-100 py-2 review-input' name="message" id="" cols="50" rows="5"></textarea>
                            </div>
                            <div>
                                <button type="submit" className='review-btn my-2'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;