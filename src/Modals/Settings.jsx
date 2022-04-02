import { React, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Switch from 'react-switch';

import './Settings.css';

function Settings(props) {
  const [hardMode, setHardMode] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className={'settings-modal'}>
      <div className="settings-title">
        <span>
          <b>SETTINGS</b>
        </span>
        <AiOutlineClose
          size={20}
          style={{ float: 'right', cursor: 'pointer' }}
          onClick={() => props.setShow(!props.show)}
        />
      </div>

      <div className="settings-row">
        <div>
          <span style={{ float: 'left' }}>Hard Mode</span>
          <br />
          <span style={{ float: 'left', fontSize: '0.6em', opacity: '.5' }}>
            Any revealed hints must be used in subsequent guesses
          </span>
        </div>
        <Switch
          checked={hardMode}
          onChange={() => setHardMode(!hardMode)}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={35}
          handleDiameter={15}
        />
      </div>

      <div className="settings-row">
        <span>Dark Theme</span>
        <Switch
          checked={darkTheme}
          onChange={() => setDarkTheme(!darkTheme)}
          className="toggle"
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={35}
          handleDiameter={15}
        />
      </div>

      <div className="settings-row">
        <div>
          <span style={{ float: 'left' }}>High Contrast Mode</span>
          <br />
          <span style={{ float: 'left', fontSize: '0.6em', opacity: '.5' }}>
            For improved color vision
          </span>
        </div>
        <Switch
          checked={highContrast}
          onChange={() => setHighContrast(!highContrast)}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={35}
          handleDiameter={15}
        />
      </div>
    </div>
  );
}

export default Settings;
