import React from "react";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { contactSchema } from "../Schema/Contactschema";
import "../Styles/ContactModal.css";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const ContactModal = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
      props.handleClose();
    },
  });

  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Body>
        <div className="contact__form">
          <h1>Contact Us</h1>
          <p>Please fill out the form below to get in touch with us.</p>

          <form onSubmit={formik.handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <small className="error-text">{formik.errors.name}</small>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="error-text">{formik.errors.email}</small>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.subject && formik.errors.subject && (
                <small className="error-text">{formik.errors.subject}</small>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <small className="error-text">{formik.errors.message}</small>
              )}
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
