import { React } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Settings.css';

function Settings(props) {
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
        <span>Coming Soon</span>
      </div>
      <div className="settings-row">
        <span>Dark Theme</span>
        <span>Coming Soon</span>
      </div>
      <div className="settings-row">
        <div>
          <span style={{ float: 'left' }}>High Contrast Mode</span>
          <br />
          <span style={{ float: 'left', fontSize: '0.6em', opacity: '.5' }}>
            For improved color vision
          </span>
        </div>
        <span>Coming Soon</span>
      </div>
    </div>
  );
}

export default Settings;
