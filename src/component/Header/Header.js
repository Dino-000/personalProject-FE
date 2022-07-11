import React from "react";
import Nav from "./Nav";
import Notification from "./Notification";

export default function Header() {
  return (
    <header className="container-fluid">
      <Notification />
      <Nav />
    </header>
  );
}
