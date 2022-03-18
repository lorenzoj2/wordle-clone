import React from 'react';
import './GameBoard.css';

function GameBoard() {
  var guesses = new Array(6).fill(0).map(() => new Array(5).fill(0));

  return (
    <div className="game-board">
      {guesses.map((guess, index) => (
        <div key={index} className="game-row">
          {guess.map((tile, index) => (
            <section key={index} className="game-tile"></section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
