import React from "react";
import Navbar from "./Navbar";

export default function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="col-md-3 row logo">
        <a className="col-1 navbar-brand" href="#">
          <h4>BoBo</h4>
        </a>
        <img className="col-8" src={"./main_logo.png"} alt="main-logo" />
      </div>
      <Navbar />
    </nav>
  );
}
