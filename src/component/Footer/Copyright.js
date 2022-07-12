import React from "react";
import "./Copyright.css";

export default function Copyright(props) {
  return (
    <div className="d-flex justify-content-between footer--copyright">
      <div className="footer--copyright-left">
        AXON ACTIVE © 2022 All Rights Reserved
      </div>
      <div className="footer--copyright-right">
        <a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a>
      </div>
    </div>
  );
}
