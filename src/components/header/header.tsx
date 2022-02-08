import React from "react";
import "./header.scss";
import Smartphone from "./smartphone/smartphone";

function Header() {
  return (
    <div className="app-header">
      <h1 className="app-header__promotional">
        <p className="main-header">
          The only paymethod app you need for your smartphone
        </p>
      </h1>
      <div className="app-header__smartphone">
        <Smartphone />
      </div>
    </div>
  );
}

export default Header;
