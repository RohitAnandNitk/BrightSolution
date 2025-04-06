import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/logo.png" alt="Brightvision Logo" className="footer-logo" />
          <p className="footer-description">
            Brightvision Services is a leading and rapidly expanding Facility Management Company in Delhi, NCR. Corporate Houses, IT, Hospitality, Business, and Government Sectors all benefit from our comprehensive and customized Facility Management solutions. Housekeeping, Pantry services, carpet shampooing, manpower supply, pest control, repair, and maintenance are just a few of the Facility Management services we can provide.
          </p>
        </div>

        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">LOCATIONS</a></li>
            <li><a href="/">CONTACT US</a></li>
          </ul>
        </div>

        <div className="footer-map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7566375311954!2d77.26934807529458!3d28.607208775684057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a94fcfbb39%3A0xd9a4c760e8b1e7c0!2sHari%20Nagar%20Ashram%2C%20New%20Delhi%2C%20Delhi%20110014!5e0!3m2!1sen!2sin!4v1712301570917!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="contact-icons">
          <div><FaWhatsapp /> <span>115A,1st Floor,Hari Nagar Ashram, New Delhi-110014</span></div>
          <div><FaPhoneAlt /> <span>Phone: +91-74 0599 0599</span></div>
          <div><FaEnvelope /> <span>E-Mail: info@brightvisionsolutions.in</span></div>
        </div>
        <p className="copyright">
          COPYRIGHT © 2024 BRIGHT VISION SERVICES ALL RIGHTS RESERVED | DESIGNED BY NK INNOVATIVE MINDS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
