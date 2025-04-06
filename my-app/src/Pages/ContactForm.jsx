import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./ContactForm.css"; // Import CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "", captcha: "" });
  };

  return (
    <div className="contact-page container-fluid p-0">
      <div className="contact-header text-center py-4">
        <h3>CONTACT US</h3>
        <p>Home / Contact Us</p>
      </div>

      <div className="row m-0 p-0">
        {/* Left - Contact Info */}
        <div className="col-md-4 contact-info">
          <h5 className="fw-bold mb-4">FEEL FREE FOR ANY TYPE QUERY</h5>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> 115A, 1st Floor, Hari Nagar Ashram, New Delhi-110014</p>
          <p><FaPhone /> <strong>Phone:</strong> +91-74 0599 0599</p>
          <p><FaEnvelope /> <strong>Email:</strong> info@brightvisionsolutions.in</p>
          <p><FaGlobe /> <strong>Visit Us:</strong> www.brightvisionsolutions.in</p>

          <div className="social-icons mt-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="col-md-8 contact-form">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="NAME" required />
              </div>
              <div className="col-md-6">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="EMAIL ADDRESS" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="PHONE NUMBER" required />
              </div>
              <div className="col-md-6">
                <input type="text" name="service" value={formData.service} onChange={handleChange} className="form-control" placeholder="CHOOSE SERVICE" />
              </div>
              <div className="col-12">
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="form-control" placeholder="MESSAGE" required></textarea>
              </div>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                  <span>2 + 4 = </span>
                  <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} className="form-control d-inline-block" style={{ width: "60px" }} required />
                </div>
                <button type="submit" className="btn btn-info text-white">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
