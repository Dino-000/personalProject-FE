import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-md-3 row logo">
        <div className="col-1 navbar-brand">
          <h4>BoBo</h4>
        </div>
        <Link to="/">
          <img className="col-8" src={"./main_logo.png"} alt="main-logo" />
        </Link>
      </div>
      <Navbar />
    </nav>
  );
}
