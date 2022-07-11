import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5>Product</h5>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5>Solution</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5>Pricing</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <h5>About Us</h5>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
