import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import '../css/Contact.css'
import ar1 from '../assets/images/ar1.svg'
import ar2 from '../assets/images/ar2.svg'
import ar3 from '../assets/images/ar3.svg'
import avatar from '../assets/images/Ellipse 2 (1).png';
import mail from '../assets/images/Group 11 (1).svg';
import vm from '../assets/images/Vector (11).svg';
import git from '../assets/images/Vector (11b).svg';
import gm from '../assets/images/Vector (12).svg';
import MessageSent from '../components/MessageSent';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const isValid = validateForm(form);

        if (isValid) {
            try {
                await emailjs.sendForm(
                    import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
                    form,
                    import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
                );

                toast.success('Form submitted successfully!');
                form.reset();
                setShowModal(true);
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('Error submitting form. Please try again.');
            }
        } else {
            console.log('Form validation failed');
        }
    };

    const validateForm = (form) => {
        let isValid = true;
        const subject = form.elements['subject'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (subject === '') {
            toast.error('Subject is required');
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ymail\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com|protonmail\.com|zoho\.com|mail\.ru|yandex\.ru)$/i;
        if (email === '') {
            toast.error('Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            toast.error('Invalid email address.');
            isValid = false;
        }

        if (message === '' || message.length < 10 || message.length > 1000) {
            toast.error('Message must be between 10 and 1000 characters');
            isValid = false;
        }

        return isValid;
    };

    return (
        <div className='i-c'>
            <Container>
                <div className='contact-container'>
                    <div className='c-frame'>
                        <Link to='/' className='lh'>
                            <h1 className='owner'>David.</h1>
                        </Link>
                        <div className='c-header'>
                            <h6 className='i-h6'>Full Stack Developer</h6>
                        </div>
                        <div className='c-text'>
                            <h1 className='c-h1'>David Onyekwere</h1>
                            <p className='c-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat
                                nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare
                                vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.
                            </p>
                        </div>
                        <div className='c-routes'>
                            <div className='c-fr'>
                               <div className="routes">
                               <Link to="/projects" className='spp'>01 <img src={ar1} alt="" /> Projects</Link>
                                
                               
                                <Link className='spp'>02 <img src={ar2} alt="" /> Download Resume</Link>
                          
                                <Link to="/contact" className='sp'>03 <img src={ar3} alt="" /> Contact</Link>
                               </div>
                                    
                                
                            </div>
                        </div>

                        <div className='c-last-line'>
                            <img src={avatar} alt='' className='c-avt' />
                            <p className='c-socials'>
                                <Link to='' className='cl'>
                                    <img src={mail} alt='' className='c-img' /> Email Me{' '}
                                    <img src={vm} alt='' className='c-img' />
                                </Link>
                                <Link to='' className='cl'>
                                    <img src={git} alt='' className='c-img' /> Github{' '}
                                    <img src={gm} alt='' className='c-img' />
                                </Link>
                            </p>
                        </div>
                    </div>





                    <div className="form-main">
                        <div className='contact-form-frame'>
                            <h1 className='h1-info'>Send A Message</h1>
                            <div className='contact-form'>
                                <Form onSubmit={handleSubmit} className='bg-custom*'>
                                    <Form.Group controlId='email'>
                                        <Form.Control
                                            type='email'
                                            placeholder='From:'
                                            className='my-4 i-e'
                                            name='email'
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId='subject'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Subject:'
                                            className='my-4 i-e'
                                            name='subject'
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId='message'>
                                        <Form.Control
                                            as='textarea'
                                            rows={8}
                                            placeholder='Write message...'
                                            className='c-msg my-4 i-e'
                                            name='message'
                                            required
                                        />
                                    </Form.Group>
                                    <span className="butt">
                                        <Button type='submit' size='lg' className='c-btn'>
                                            Send Message
                                        </Button>
                                    </span>

                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
            <Toaster position="top-center" />
            {showModal && <MessageSent showModal={showModal} setShowModal={setShowModal} />}
        </div>
    );
};

export default Contact;