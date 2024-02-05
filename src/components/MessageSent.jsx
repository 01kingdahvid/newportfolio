// MessageSent.jsx

import React from 'react';
import { Modal } from 'react-bootstrap';
import mb from '../assets/images/inbox.svg';
import '../css/MessageSent.css';
import { Link } from 'react-router-dom';
import cb from '../assets/images/closebutton.svg';

function MessageSent({ showModal, setShowModal }) { // Receive props
    const handleClose = () => setShowModal(false);

    return (
        <>
            <div className="modal-container">
                <Modal show={showModal} onHide={handleClose} animation={false}>
                    
                    <Modal.Body className='declan-mod'>
                    <div className="div" alt="close-button" onClick={handleClose}>
                        <img src={cb} alt="" className='div-img'/>
                    </div>
                        <div className="mod-content">
                            <img src={mb} alt="" className='mod-img'/>
                            <h1 className='mod-h1'>Message Sent!</h1>
                            <p className='mod-p'>Thank you for reaching out, a response will be sent shortly. In the meantime, kindly check projects I’ve worked on.</p>
                            <Link to="/" className='mod-link'>Go to Projects</Link>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default MessageSent;
