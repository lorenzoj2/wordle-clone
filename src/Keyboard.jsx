import React from 'react';
import './Keyboard.css';

import { FiDelete } from 'react-icons/fi';

function Keyboard(props) {
  let keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
  ];

  function handleOnScreenKeyPress(e) {
    props.handleOnScreenKeyPress(e.target.id);
  }

  function getKeyClass(letter) {
    if (props.keysPressed[0].includes(letter)) {
      return 'keyboard-key key-correct';
    } else if (props.keysPressed[1].includes(letter)) {
      return 'keyboard-key key-in-word';
    } else if (props.keysPressed[2].includes(letter)) {
      return 'keyboard-key key-not-in-word';
    } else {
      return 'keyboard-key';
    }
  }

  return (
    <div className="keyboard">
      {keys.map((key, index) => (
        <div key={index} className="keyboard-row">
          {key.map((letter, index) => {
            if (letter === 'ENTER')
              return (
                <section
                  onClick={(e) => handleOnScreenKeyPress(e)}
                  id={'ENTER'}
                  className="keyboard-key enter"
                  key={index}
                >
                  {letter}
                </section>
              );
            else if (letter === 'BACKSPACE')
              return (
                <section
                  onClick={(e) => handleOnScreenKeyPress(e)}
                  id={'BACKSPACE'}
                  className="keyboard-key del"
                  key={index}
                >
                  <FiDelete size={25} style={{ pointerEvents: 'none' }} />
                </section>
              );
            else
              return (
                <section
                  onClick={(e) => handleOnScreenKeyPress(e)}
                  id={letter}
                  className={getKeyClass(letter)}
                  key={index}
                >
                  {letter}
                </section>
              );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
