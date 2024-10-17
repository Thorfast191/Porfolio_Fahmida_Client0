import React from "react";
import "./Contact.css";

// Import logos for social media and contact
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa"; // Example using react-icons

const ContactMe = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="row">
          <div className="col-md-12 contact-content">
            <h1>Contact Me</h1>
            <ul>
              <li>
                <FaFacebook size={24} />
                <strong> Facebook:</strong>
                <a
                  href="[Your Facebook Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Your Facebook Username]
                </a>
              </li>
              <li>
                <FaWhatsapp size={24} />
                <strong> WhatsApp:</strong>
                <a
                  href="https://wa.me/[YourWhatsAppNumber]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with me
                </a>
              </li>
              <li>
                <FaEnvelope size={24} />
                <strong> Email:</strong>
                <a href="mailto:[YourEmail]">[YourEmail]</a>
              </li>
              <li>
                <FaPhone size={24} />
                <strong> Phone:</strong> [Your Contact Number]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
