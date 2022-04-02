import { React, useState } from 'react';
import './Header.css';
import Settings from './Modals/Settings';

import { BsList, BsQuestionCircle } from 'react-icons/bs';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { GoGear } from 'react-icons/go';

function Header() {
  const [settingsModal, setSettingsModal] = useState(false);

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
        <GoGear
          onClick={() => setSettingsModal(!settingsModal)}
          className="header-icon"
          size={25}
        />
      </div>
      {settingsModal && (
        <Settings show={settingsModal} setShow={setSettingsModal} />
      )}
    </header>
  );
}

export default Header;
