import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">

      {/* Carousel */}
      <div id="mainCarousel" className="carousel slide landing__carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1200x500?text=Slide+1" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x500?text=Slide+2" className="d-block w-100" alt="Slide 2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Introduction */}
      <section className="landing__intro py-5">
        <div className="container d-flex align-items-center">
          <img src="https://via.placeholder.com/400x300" className="img-fluid" alt="Cleaning Team" />
          <div className="ps-4 landing__intro-content">
            <h6 className="text-primary">INTRODUCTION</h6>
            <h2>WELCOME TO BRIGHT VISION SERVICE</h2>
            <p>Brightvision Services is a leading and rapidly expanding Facility Management Company in Delhi NCR...</p>
            <ul>
              <li>✅ CLEANING AND HYGIENE MAINTENANCE</li>
              <li>✅ COMMERCIAL AND OFFICE FACILITY MANAGEMENT</li>
              <li>✅ PEST CONTROL SERVICES</li>
            </ul>
            <button className="btn btn-info text-white">READ MORE</button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="landing__services py-5">
        <div className="container text-center">
          <h3>OUR SERVICES</h3>
          <div className="row">
            <div className="col-md-3 landing__service-card">
              <img src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/car-dry-cleaning.webp" alt="Project Cleaning" className="img-fluid" />
              <p className="fw-bold">PROJECT CLEANING</p>
            </div>
            <div className="col-md-3 landing__service-card">
              <img src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/1658313765_e2071b2624f48e1b2d84.jpg" alt="Post Construction" className="img-fluid" />
              <p className="fw-bold">POST CONSTRUCTION CLEANING</p>
            </div>
            <div className="col-md-3 landing__service-card">
              <img src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/abs-solution5.jpg" alt="AMC" className="img-fluid" />
              <p className="fw-bold">ANNUAL MAINTENANCE CONTRACT</p>
            </div>
            <div className="col-md-3 landing__service-card">
              <img src="https://brightvisionsolutions.in/wp-content/uploads/2024/08/industrial-cleaning-services-2393087.jpg" alt="Industrial Cleaning" className="img-fluid" />
              <p className="fw-bold">INDUSTRIAL CLEANING SERVICES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="landing__why-choose py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h6 className="text-primary">WHY CHOOSE US</h6>
              <h4>Bright Vision Service believes in taking the weight off our client’s shoulder...</h4>
              <p>We handle all aspects of facility management...</p>
              <button className="btn btn-info text-white">BOOK AN APPOINTMENT</button>
            </div>
            <div className="col-md-7">
              <div className="row">
                {[
                  ['WIDE NETWORK', 'We have a wide network...'],
                  ['WE ARE PROFESSIONALS', 'Our staff is highly skilled...'],
                  ['WE UNDERSTAND YOUR NEED', 'Multi-skilled staff...'],
                  ['INNOVATION AND EFFICIENCY', 'Efficiency approach...'],
                  ['CUSTOMER SATISFACTION', 'Happy customers...'],
                  ['24×7 SUPPORT', 'Round the clock help...']
                ].map(([title, desc], i) => (
                  <div className="col-md-4" key={i}>
                    <div className="landing__feature-box">
                      <h6>{title}</h6>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="landing__stats py-4">
        <div className="container d-flex justify-content-around text-center">
          <div className="landing__stat-box">
            <h2 className="text-info">500+</h2>
            <p>PROJECT COMPLETED</p>
          </div>
          <div className="landing__stat-box">
            <h2 className="text-info">90+</h2>
            <p>AWARDS & CERTIFICATE</p>
          </div>
          <div className="landing__stat-box">
            <h2 className="text-info">150+</h2>
            <p>PROFESSIONAL WORKER</p>
          </div>
          <div className="landing__stat-box">
            <h2 className="text-info">28+</h2>
            <p>YEAR OF EXPERIENCE</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
