import React from 'react';
import './Blog.css';
import carpentryImg from '../assets/carpentry.jpg';
import pestcontrolImg from '../assets/pestcontrol.jpg';
import topBg from '../assets/topbg.jpg';

const Blog = () => {
  return (
    <div className="blogs-wrapper">
      <div
            className="blogs-header"
            style={{ backgroundImage: `url(${topBg})` }}
            >
        <div className="header-text">
          <h2>OUR BLOGS</h2>
          <p>Home / Our Blogs</p>
        </div>
      </div>

      <div className="blogs-content">
        <div className="blog-box">
          <img src={carpentryImg} alt="Carpentry Services" />
          <div className="blog-details">
            <h3>CARPENTRY SERVICES</h3>
            <p className="meta">
              by brightvision | Aug 25, 2024 | <span>Carpentry Services</span>
            </p>
            <p className="desc">
              Whether looking to buy, build, or just fix up a home,...
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img src={pestcontrolImg} alt="Pest Control Services" />
          <div className="blog-details">
            <h3>PEST CONTROL SERVICES</h3>
            <p className="meta">
              by brightvision | Aug 25, 2024 | <span>Pest Control Services</span>
            </p>
            <p className="desc">
              Pest The monsoons can be extremely problematic and can...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;