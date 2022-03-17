import React from "react";
import "./Header.css";

import { BsList, BsQuestionCircle } from "react-icons/bs";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GoGear } from "react-icons/go";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <span>
          <BsList />
          <BsQuestionCircle />
        </span>
      </div>
      <div className="title">Wordle</div>
      <div className="header-right">
        <span>
          <BiBarChartAlt2 />
          <GoGear />
        </span>
      </div>
    </header>
  );
}

export default Header;
