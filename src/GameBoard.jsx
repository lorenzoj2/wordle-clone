import React, { useState } from 'react';
import './GameBoard.css';

function GameBoard(props) {
  const [guesses] = useState(
    new Array(6).fill(0).map(() => new Array(5).fill(0))
  );

  if (props.currentGuess.length >= 0 && props.guessIndex <= 5) {
    let temp = new Array(5).fill(0);
    props.currentGuess.forEach((value, index) => (temp[index] = value));
    guesses[props.guessIndex] = temp;
  }

  function getTileClass(tile, index, row_index) {
    if (row_index < props.guessIndex) {
      if (props.currentAnswer[index] === tile) {
        return 'game-tile correct';
      } else if (props.currentAnswer.includes(tile)) {
        return 'game-tile in-word';
      } else if (!props.currentAnswer.includes(tile)) {
        return 'game-tile not-in-word';
      }
    }
    return 'game-tile filled';
  }

  return (
    <div className="game-board">
      {guesses.map((guess, row_index) => (
        <div key={row_index} className="game-row">
          {guess.map((tile, index) => (
            <section
              key={index}
              className={
                tile === 0 ? 'game-tile' : getTileClass(tile, index, row_index)
              }
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
