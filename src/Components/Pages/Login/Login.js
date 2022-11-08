import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImg from '../../Assets/loginImg2.svg';
import './Login.css';
import googleImg from '../../Assets/icons/google.png'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={loginImg} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6">
                     
                        <div className='login-form px-3 py-4'>
                            <h3 className='text-center pt-3'>SIGN IN</h3>
                            <div className='user-profile text-center'><FaUser /></div>
                            <form onSubmit={handleLogin}>
                                <div>
                                    <input type="email" name='email' className='email w-100 mt-2 mb-2' placeholder='Your Email' />
                                </div>
                                <div>
                                    <input type="password" name='password' className='password w-100 mt-2 mb-2' placeholder='Your Password' />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='login-btn '>LogIn</button>
                                </div>
                            </form>
                            <p>Dont Have An Account? Please <Link className='register-link' to='/register'>Register</Link></p>
                            <div className='mt-2'>
                                <button o className='icon-border px-3 py-2'> <img src={googleImg} className="google-icon" alt="" /> Continue with google</button>
                            </div>
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;