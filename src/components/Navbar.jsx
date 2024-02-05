import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import Downloading from './Downloading';

function NavScrollExample() {
    const [showModal, setShowModal] = useState(false);

    // Function to handle the click event on the "Download Resume" link
    const handleDownloadClick = () => {
        setShowModal(true); // Set showModal state to true to display the modal
    };


  return (
    <>
    <Navbar expand="lg" className=" nav-bar">
      <Container>
        <Navbar.Brand to="/" className='b-name'>David.</Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            navbarScroll
          >
            <Nav.Link as={Link} to="/projects" className='link'>Projects</Nav.Link>
            <Nav.Link to="#action2" className='link' onClick={handleDownloadClick}>Download Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {showModal && <Downloading showModal={showModal} setShowModal={setShowModal} />}
</>
  );
}

export default NavScrollExample;