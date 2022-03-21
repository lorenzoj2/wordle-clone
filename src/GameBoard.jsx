import React from 'react';
import './GameBoard.css';

function GameBoard(props) {
  if (
    props.currentGuess.length >= 0 &&
    props.guessIndex <= 5 &&
    props.currentGuess.length <= 5 &&
    !props.loading
  ) {
    let temp = new Array(5).fill(0);
    props.currentGuess.forEach((value, index) => (temp[index] = value));
    props.guesses[props.guessIndex] = temp;
  }

  function getTileClass(tile, index, row_index) {
    if (row_index < props.guessIndex) {
      if (props.guessResults[row_index][index] === 2) {
        return 'game-tile correct';
      } else if (props.guessResults[row_index][index] === 1) {
        return 'game-tile in-word';
      } else {
        return 'game-tile not-in-word';
      }
    }
    return 'game-tile filled';
  }

  return (
    <div className="game-board">
      {props.guesses.map((guess, row_index) => (
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
