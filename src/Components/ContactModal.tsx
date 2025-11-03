import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "../Styles/ContactModal.css";

interface Props {
    show: boolean;
    handleClose: () => void;
}


const ContactModal = (props: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Modal show={props.show} onHide={props.handleClose}>

                <Modal.Body>
                    <div className="contact__form">
                        <h1>Contact Us</h1>
                        <p>Please fill out the form below to get in touch with us.</p>

                        <form>
                            <div>
                                <label htmlFor="name">Full Name:</label><br />
                                <input type="text" id="name" name="name" required /><br /><br />
                            </div>

                            <div>
                                <label htmlFor="email">Email Address:</label><br />
                                <input type="email" id="email" name="email" required /><br /><br />
                            </div>

                            <div>
                                <label htmlFor="subject">Subject:</label><br />
                                <input type="text" id="subject" name="subject" /><br /><br />
                            </div>

                            <div>
                                <label htmlFor="message">Message:</label><br />
                                <textarea id="message" name="message" required></textarea><br /><br />
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ContactModal;