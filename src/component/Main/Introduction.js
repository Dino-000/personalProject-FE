import React from "react";
import "./Introduction.css";

export default function Introduction(props) {
  const introStyle = {
    background: "url('./main.png')",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="col-md-8 intro" style={introStyle}>
      <form>
        <h1 className="intro--slogan">
          One App to <br />
          replace them all
        </h1>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter your email address"
          aria-label="Search"
        />
        <br />
        <button type="button" className="btn btn-success">
          Book A Demo
        </button>
      </form>
    </section>
  );
}
