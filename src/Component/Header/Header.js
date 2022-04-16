import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                <Navbar.Brand as={Link} to="/">
                        <h4>Doctor<span className='moshai'>Moshai</span></h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home#services">Home</Nav.Link>  
                            <Nav.Link href="home#services">Services</Nav.Link>  
                            <Nav.Link href="home#services">Blog</Nav.Link>  
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {/* {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>} */}
                             <Nav.Link as={Link} to="login">Login</Nav.Link> 
                        </Nav>
                       
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;