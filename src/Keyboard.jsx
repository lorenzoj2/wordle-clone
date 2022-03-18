import React from 'react';
import './Keyboard.css';

import { FiDelete } from 'react-icons/fi';

function Keyboard(props) {
  let keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
  ];

  function handleKeyPress(e) {
    props.updateGuess(e.target.id);
  }

  return (
    <div className="keyboard">
      {keys.map((key, index) => (
        <div key={index} className="keyboard-row">
          {key.map((letter, index) => {
            if (letter === 'ENTER')
              return (
                <section
                  onClick={(e) => handleKeyPress(e)}
                  id={'ENTER'}
                  className="keyboard-key enter"
                  key={index}
                >
                  {letter}
                </section>
              );
            else if (letter === 'DEL')
              return (
                <section
                  onClick={(e) => handleKeyPress(e)}
                  id={'DEL'}
                  className="keyboard-key del"
                  key={index}
                >
                  <FiDelete size={25} style={{ pointerEvents: 'none' }} />
                </section>
              );
            else
              return (
                <section
                  onClick={(e) => handleKeyPress(e)}
                  id={letter}
                  className="keyboard-key"
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
