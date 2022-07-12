import React from "react";
import "./Main.css";
import Aside from "./Aside";
import Introduction from "./Introduction";
import Review from "./Review";

export default function Main(props) {
  return (
    <main>
      <div className="row content--main">
        <Introduction />
        <Aside />
      </div>
      <Review />
    </main>
  );
}
