
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {

        navigate('/')
    }

    return (
        <Navbar style={{ background: "#622b0c", padding: "10px" }} expand="lg">
            <Container className="banner-container">
                <Navbar.Brand className="logo" href="#">SegWitz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={handleLogout} className="btn blog-btn" href="">LogOut</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;