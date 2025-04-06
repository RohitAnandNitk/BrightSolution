import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <!-- Top Bar --> */}
      <div className="top-bar">
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>115A, 1st Floor, Hari Nagar Ashram, New Delhi-110014</span>
        </div>
        <div className="social-language">
          <div className="social-icons">
            <Link to="#" className="fab fa-facebook-f"></Link>
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
          </div>
          <div className="language">
            <select>
              <option>Select Language</option>
              <option>English</option>
              <option>Hindi</option>
            </select>
            <span>Powered by Google Translate</span>
          </div>
        </div>
      </div>
    
      {/* <!-- Logo and Contact Section --> */}
      <div className="logo-contact">
        <div className="logo">
          <img
            src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-29-at-11.20.36-PM.webp"
            alt="Brightvision Services"
          />
        </div>
        <div className="contact-timing">
          <div className="contact">
            <i className="fas fa-phone"></i>
            <span>+91-74 0599 0599</span>
            <i className="fas fa-envelope"></i>
            <span>info@brightvisionsolutions.in</span>
          </div>
          <div className="timing">
            <i className="fas fa-clock"></i>
            <span>Monday to Sunday 9:00am - 6:00pm</span>
          </div>
        </div>
      </div>
    
      {/* <!-- Navigation Menu --> */}
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">
              SERVICES <i className="fas fa-chevron-down"></i>
            </Link>
          </li>
          <li>
            <Link to="/branch-office">BRANCH OFFICE</Link>
          </li>
          <li>
            <Link to="/blog">OUR BLOGS</Link>
          </li>
          <li>
            <Link to="/contact-form">CONTACT US</Link>
          </li>
        </ul>
        <button>Book An Appointment</button>
      </nav>
    </header>
  );
};

export default Header;
