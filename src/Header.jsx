import React from 'react';
import './Header.css';

import { BsList, BsQuestionCircle } from 'react-icons/bs';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GoGear } from 'react-icons/go';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <BsList size={25} style={{ 'stroke-width': 0.75 }} />
        <BsQuestionCircle size={20} />
      </div>
      <div className="title">Wordle</div>
      <div className="header-right">
        <BiBarChartAlt2 size={25} />
        <GoGear size={25} />
      </div>
    </header>
  );
}

export default Header;
