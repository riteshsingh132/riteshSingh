
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./Navbarcomp.css"



function Navbarcomp() {
    return (
        <>
            <Navbar expand="lg" className="bg-custom position-fixed fixed-top">
                <Container >
                    <Navbar.Brand className='navbarbrand' href="#home">Ritesh Singh</Navbar.Brand>
                    {/* <div className='justify-content-end'> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="#about">About</Nav.Link>
                            <Nav.Link className='nav-link' href="#skill">Skills</Nav.Link>
                            <Nav.Link className='nav-link' href="#project">Project</Nav.Link>
                            <a className='main-btn' type='button' href="#link">Hire Me</a>
                    </Navbar.Collapse>
                    {/* </div> */}
                </Container>
            </Navbar>



        </>
    )
}

export default Navbarcomp