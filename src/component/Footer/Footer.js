import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row footer--content">
          <div className="col-md-5 footer--content-services">
            <h2>Service</h2>
            <p>
              Dedicated Development Team for Software Development Project
              Management and Consulting Service ICT and DevOps Service for Cloud
              Computing Coaching and Training Service
            </p>
            <div className="row footer--content-services-icon">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
          <div className="col-md-2 footer--content-aboutus">
            <h2>About Us</h2>
            <h6>
              Axon Model<sup>TM</sup>
            </h6>
            <h6>History</h6>
            <h6>The Management</h6>
            <h6>Out Teams</h6>
          </div>
          <div className="col-md-2 footer--content-others">
            <h2>Others</h2>
            <h6>Blogs/Events</h6>
            <h6>Contact us</h6>
            <h6>Join us</h6>
            <h6>Download</h6>
          </div>
          <div className="col-md-3 footer--content-certificates">
            <h2>Certificates</h2>
            <br />
            <img src="./iso-cert.webp" alt="iso-cert" />
            <img src="./micro-cert.webp" alt="micro-cert" />
          </div>
        </div>
      </div>
    </footer>
  );
}
