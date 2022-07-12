import React from "react";
import "./Notification.css";

export default function Notification(props) {
  return (
    <div className="greeting">
      <i className="bi bi-tv"></i>
      Visualize your next big idea, then bring it to life with your team.
      <div>
        <sup>New BoBo WhiteBoard</sup>
        <i className="bi bi-door-closed-fill"></i>
      </div>
    </div>
  );
}
