import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link">
              <h5>
                <Link to="/under-construction">Product</Link>
              </h5>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <h5>
                <Link to="/under-construction">Solution</Link>
              </h5>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <h5>
                <Link to="/under-construction">Pricing</Link>
              </h5>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <h5>
                <Link to="/under-construction">About Us</Link>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
