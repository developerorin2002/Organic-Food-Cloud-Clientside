import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <div className='logo py-4'>
                        <Link to='/home'><img src={logo} alt="" /></Link>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className='nav-container'>
                                <Link to='/home'>Home</Link>
                                <Link to='/services'>Services</Link>
                                <Link to='/review'>Review</Link>
                                <Link to='/blog'>Blog</Link>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;