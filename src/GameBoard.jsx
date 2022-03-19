import React from 'react';
import './GameBoard.css';

function GameBoard(props) {
  var guesses = new Array(6).fill(0).map(() => new Array(5).fill(0));

  if (props.currentGuess.length >= 0) {
    let temp = new Array(5).fill(0);
    props.currentGuess.forEach((value, index) => (temp[index] = value));
    guesses[0] = temp;
  }

  return (
    <div className="game-board">
      {guesses.map((guess, index) => (
        <div key={index} className="game-row">
          {guess.map((tile, index) => (
            <section
              key={index}
              className={tile === 0 ? 'game-tile' : 'game-tile filled'}
            >
              {tile === 0 ? '' : tile}
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
