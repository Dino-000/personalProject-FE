import React from "react";
import "./Aside.css";

export default function Aside(props) {
  return (
    <aside className="col-md-4 intro--image">
      <img
        className="aside--image-background"
        src="./aside_main_background.png"
        alt="bacground"
      />
      <img
        className="aside--image-main"
        src="./asside_main_img.png"
        alt="office"
      />
    </aside>
  );
}
