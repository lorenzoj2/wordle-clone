import React from 'react';
import './Header.css';

import { BsList, BsQuestionCircle } from 'react-icons/bs';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GoGear } from 'react-icons/go';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <BsList
          className="header-icon"
          size={25}
          style={{ strokeWidth: 0.75 }}
        />
        <BsQuestionCircle className="header-icon" size={20} />
      </div>
      <div className="title">Wordle</div>
      <div className="header-right">
        <BiBarChartAlt2 className="header-icon" size={25} />
        <GoGear className="header-icon" size={25} />
      </div>
    </header>
  );
}

export default Header;
