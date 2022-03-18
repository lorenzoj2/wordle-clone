import React from 'react';
import './GameBoard.css';

function GameBoard() {
  var guesses = new Array(6).fill(0).map(() => new Array(5).fill(0));
  console.log(guesses.slice());

  return (
    <div className="game-board">
      {guesses.map((guess, index) => (
        <div className="game-row">
          {guess.map((tile) => (
            <section className="game-tile"></section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
