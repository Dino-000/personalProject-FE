import React from "react";
import "./Review.css";

export default function Review(props) {
  return (
    <div className="col-md-7 content--addition">
      <div className="content--addition--rating">
        <img src="./star-removebg-preview 4.png" alt="star" />
        <img src="./star-removebg-preview 4.png" alt="star" />
        <img src="./star-removebg-preview 4.png" alt="star" />
        <img src="./star-removebg-preview 4.png" alt="star" />
        <img src="./star-removebg-preview 4.png" alt="star" />
        based on 10.000+ reviews on
      </div>
      <div className="stakeholder_logo">
        <img src="./crunchbase-removebg-preview 1.png" alt="" />
      </div>
    </div>
  );
}
