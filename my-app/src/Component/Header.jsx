import React from "react";
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <header>
    {/* <!-- Top Bar --> */}
    <div class="top-bar">
      <div class="location">
        <i class="fas fa-map-marker-alt"></i>
        <span>115A, 1st Floor, Hari Nagar Ashram, New Delhi-110014</span>
      </div>
      <div class="social-language">
        <div class="social-icons">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
        </div>
        <div class="language">
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
    <div class="logo-contact">
      <div class="logo">
        <img src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-29-at-11.20.36-PM.webp" alt="Brightvision Services"/>
      </div>
      <div class="contact-timing">
        <div class="contact">
          <i class="fas fa-phone"></i>
          <span>+91-74 0599 0599</span>
          <i class="fas fa-envelope"></i>
          <span>info@brightvisionsolutions.in</span>
        </div>
        <div class="timing">
          <i class="fas fa-clock"></i>
          <span>Monday to Sunday 9:00am - 6:00pm</span>
        </div>
      </div>
    </div>

    {/* <!-- Navigation Menu --> */}
    <nav>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">SERVICES <i class="fas fa-chevron-down"></i></a></li>
        <li><a href="#">BRANCH OFFICE</a></li>
        <li><a href="#">OUR BLOGS</a></li>
        <li><a href="#">CONTACT US</a></li>
      </ul>
      <button>Book An Appointment</button>
    </nav>
  </header>
  );
};

export default Header;
